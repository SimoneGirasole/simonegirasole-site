// api/proxy.js — Proxy audio Apple iTunes per Vercel (Node https nativo)
// Risolve CORS scaricando l'audio server-side e streamandolo al browser

const https = require('https');
const http = require('http');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Parametro url mancante' });
  }

  // Sicurezza: solo URL Apple
  const allowed = [
    'https://audio-ssl.itunes.apple.com/',
    'https://is1-ssl.mzstatic.com/',
    'https://is2-ssl.mzstatic.com/',
    'https://is3-ssl.mzstatic.com/',
    'https://is4-ssl.mzstatic.com/',
    'https://is5-ssl.mzstatic.com/',
  ];
  if (!allowed.some(prefix => url.startsWith(prefix))) {
    return res.status(403).json({ error: 'URL non permesso' });
  }

  try {
    await streamUrl(url, res, 0);
  } catch (err) {
    console.error('Proxy error:', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Errore proxy: ' + err.message });
    }
  }
};

function streamUrl(url, res, redirects) {
  return new Promise((resolve, reject) => {
    if (redirects > 6) return reject(new Error('Troppi redirect'));

    let parsed;
    try { parsed = new URL(url); } catch(e) { return reject(e); }

    const lib = parsed.protocol === 'https:' ? https : http;
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: {
        'User-Agent': 'iTunes/12.12 (Macintosh; OS X 12.0)',
        'Accept': '*/*',
        'Accept-Encoding': 'identity',
      },
      timeout: 15000,
    };

    const req = lib.request(options, (upstream) => {
      // Gestisci redirect 301/302/303/307
      if ([301,302,303,307,308].includes(upstream.statusCode) && upstream.headers.location) {
        upstream.resume(); // consuma il body e ignora
        const next = upstream.headers.location.startsWith('http')
          ? upstream.headers.location
          : `${parsed.protocol}//${parsed.hostname}${upstream.headers.location}`;
        resolve(streamUrl(next, res, redirects + 1));
        return;
      }

      if (upstream.statusCode < 200 || upstream.statusCode >= 300) {
        upstream.resume();
        return reject(new Error(`HTTP ${upstream.statusCode} da Apple`));
      }

      // Invia headers al browser
      const ct = upstream.headers['content-type'] || 'audio/mp4';
      res.setHeader('Content-Type', ct);
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      if (upstream.headers['content-length']) {
        res.setHeader('Content-Length', upstream.headers['content-length']);
      }
      res.status(200);

      // Streamma direttamente
      upstream.pipe(res);
      upstream.on('end', resolve);
      upstream.on('error', reject);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout connessione Apple'));
    });
    req.on('error', reject);
    req.end();
  });
}

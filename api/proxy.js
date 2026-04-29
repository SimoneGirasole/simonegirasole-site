// Proxy audio — scarica il preview da Apple e lo serve al browser
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const url = req.query.url;
  if (!url || !url.startsWith('https://audio-ssl.itunes.apple.com/')) {
    return res.status(400).json({ error: 'URL non valido' });
  }

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'iTunes/12.0' }
    });
    if (!response.ok) throw new Error(`Apple error: ${response.status}`);

    res.setHeader('Content-Type', response.headers.get('content-type') || 'audio/mp4');
    res.setHeader('Cache-Control', 's-maxage=86400');
    res.setHeader('Accept-Ranges', 'bytes');

    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

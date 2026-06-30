// api/admin.js
// Proxy serverless tra la dashboard admin e le GitHub Contents API.
// Il token GitHub e la password admin restano SOLO su Vercel (env vars), mai nel codice client.
//
// Variabili d'ambiente da impostare su Vercel:
//   GITHUB_TOKEN    -> il token GitHub (es. ghp_...) con permessi di scrittura sul repo
//   ADMIN_PASSWORD  -> la password che usi per accedere alla dashboard
//   GITHUB_REPO     -> opzionale, default "SimoneGirasole/simonegirasole-site"
//   GITHUB_BRANCH   -> opzionale, default "main"

const REPO = process.env.GITHUB_REPO || 'SimoneGirasole/simonegirasole-site';
const BRANCH = process.env.GITHUB_BRANCH || 'main';

function encodePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Metodo non consentito' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const { password, action, path, content, message, sha } = body;

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Password errata' });
    return;
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'GITHUB_TOKEN non configurato su Vercel' });
    return;
  }

  const ghHeaders = {
    'Authorization': 'token ' + token,
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'simonegirasole-admin-dashboard'
  };

  try {
    if (action === 'get') {
      if (!path) { res.status(400).json({ error: 'path mancante' }); return; }

      const url = 'https://api.github.com/repos/' + REPO + '/contents/' + encodePath(path) + '?ref=' + BRANCH;
      const ghRes = await fetch(url, { headers: ghHeaders });

      if (ghRes.status === 404) {
        res.status(200).json({ notFound: true });
        return;
      }
      if (!ghRes.ok) {
        const t = await ghRes.text();
        res.status(ghRes.status).json({ error: 'Errore GitHub GET', detail: t });
        return;
      }
      const data = await ghRes.json();
      res.status(200).json({ content: data.content, sha: data.sha, encoding: data.encoding });
      return;
    }

    if (action === 'put') {
      if (!path || !content) { res.status(400).json({ error: 'path o content mancante' }); return; }

      const url = 'https://api.github.com/repos/' + REPO + '/contents/' + encodePath(path);
      const putBody = {
        message: message || ('Aggiornamento da dashboard admin - ' + new Date().toISOString()),
        content: content,
        branch: BRANCH
      };
      if (sha) putBody.sha = sha;

      const ghRes = await fetch(url, {
        method: 'PUT',
        headers: Object.assign({}, ghHeaders, { 'Content-Type': 'application/json' }),
        body: JSON.stringify(putBody)
      });

      const data = await ghRes.json();
      if (!ghRes.ok) {
        res.status(ghRes.status).json({ error: 'Errore GitHub PUT', detail: data });
        return;
      }
      res.status(200).json({ ok: true, sha: data.content ? data.content.sha : null, commit: data.commit ? data.commit.sha : null });
      return;
    }

    res.status(400).json({ error: 'action non valida (usa "get" o "put")' });
  } catch (err) {
    res.status(500).json({ error: 'Errore server', detail: String(err) });
  }
};

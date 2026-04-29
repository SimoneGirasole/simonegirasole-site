# Simone Girasole DJ Site

Sito personale di Simone Girasole — DJ, Producer, Radio Host (m2o).

## Struttura
- `public/index.html` — il sito completo (single page)
- `api/search.js` — proxy serverless Vercel per iTunes API (risolve CORS)
- `vercel.json` — configurazione Vercel
- `package.json` — config Node.js

## Come funziona il player
- Usa **iTunes Search API** (gratuita, zero registrazione)
- Il proxy `/api/search` gira su Vercel come funzione serverless
- Preview audio reali da 30 secondi via `<audio>` HTML5 nativo
- Copertine ad alta risoluzione da Apple

## Deploy su Vercel
1. Fai push di questa cartella su GitHub
2. Vai su vercel.com → "Add New Project" → importa il repo
3. Clicca "Deploy" — tutto automatico!

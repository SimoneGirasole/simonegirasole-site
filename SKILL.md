---
name: simonegirasole-site
description: Memoria e istruzioni complete per lavorare sul sito simonegirasole.com — il sito DJ/Producer/Radio Host di Simone Girasole. Usa questa skill SEMPRE quando l'utente menziona il sito di Simone Girasole, chiede di aggiornare le notizie, modificare le classifiche, sistemare bug, aggiornare il content.js settimanale, lavorare su GitHub o Vercel del progetto, pubblicare sui social, o qualsiasi altra attività legata a questo sito. Include credenziali, struttura tecnica, stack, DNS, sistema audio, istruzioni per l'aggiornamento settimanale e pubblicazione social.
---

# Simone Girasole DJ Site — Skill di Progetto

## URL E ACCESSI

| Risorsa | Valore |
|---|---|
| Sito live | https://simonegirasole.com |
| Vercel URL | https://simonegirasole-site.vercel.app |
| GitHub repo | https://github.com/SimoneGirasole/simonegirasole-site |
| Vercel project ID | `prj_howjHH7ZeFVQi7A22Mb0GQBE14LP` |
| Vercel team | `simonegirasolem2o-3000` |
| GitHub token | `ghp_[GITHUB_TOKEN]` |
| Make team ID | 1584256 / org ID 7469904 |
| Make scenario social ID | **5809330** |
| Make webhook URL | `https://hook.eu1.make.com/cga1ihumac2iaer5fowbn3yhwskwlr87` |

## STRUTTURA FILE

```
simonegirasole-site/
├── api/
│   ├── search.js       ← proxy iTunes API (CommonJS, country=US)
│   └── proxy.js        ← proxy audio Apple (aggira CORS, gestisce redirect)
├── public/
│   ├── index.html      ← sito single-page completo (UNICO FILE STRUTTURA)
│   ├── content.js      ← contenuti settimanali (UNICO FILE DA AGGIORNARE)
│   ├── images/         ← foto articoli caricate via GitHub API
│   │   ├── nameless.jpg
│   │   ├── kappa.jpg
│   │   ├── primavera.jpg
│   │   ├── seastar.jpg
│   │   ├── springattitude.jpg
│   │   ├── acustica_rust2.jpg
│   │   ├── polyend_drums.jpg
│   │   ├── bpb_saturator.jpg
│   │   └── battlefx.jpg
│   ├── simone-girasole.jpg
│   └── favicon.ico
├── vercel.json         ← usa rewrites NON routes
└── package.json        ← node 24.x
```

### vercel.json (CRITICO)
```json
{
  "rewrites": [
    { "source": "/api/search", "destination": "/api/search.js" },
    { "source": "/api/proxy", "destination": "/api/proxy.js" },
    { "source": "/(.*)", "destination": "/public/$1" }
  ]
}
```

## STACK TECNICO

- **Frontend:** HTML statico single-page, CSS custom, JS vanilla
- **Backend:** Vercel Serverless Functions Node 24.x
- **Audio:** iTunes Search API + proxy Vercel (aggira CORS Apple)
- **Font:** Raleway (logo), Bebas Neue (titoli), Space Mono (mono), DM Sans (body)
- **Immagini:** foto reali caricate su GitHub in `/public/images/`
- **Deploy:** commit GitHub → Vercel auto-deploy

### Note tecniche critiche
- `api/search.js` e `api/proxy.js`: usare `module.exports` (CommonJS), NON `export default`
- Tag `<audio>`: NON usare `crossorigin="anonymous"`
- iTunes `country=US` ha più brani dance rispetto a `country=IT`
- `content.js` caricato nell'`<head>` con `<script src="/content.js">`
- La funzione `initFromContent()` in `window.load` popola tutto il sito da `WEEKLY_CONTENT`
- **NON** esiste più `typography.css` separato — tutto il CSS è in `index.html`

## ARCHITETTURA DATI

Tutti gli articoli sono in un unico array JS `allArticles[]`:
- `allArticles[0]` → hero home
- `allArticles[1..4]` → 4 news clubbing (home + musica)
- `allArticles[5..8]` → 4 tech & gear (home + musica)

`initFromContent()` legge `WEEKLY_CONTENT` da `content.js` e:
1. Popola l'hero
2. Costruisce le grid home news e tech
3. Aggiorna `allArticles[]` con i dati settimanali
4. Aggiorna charts e disco

## DESIGN — COLORI

```css
--black: #0a0a0a
--dark: #111
--border: #222
--purple: #7c3aed
--pl: #a855f7
--pink: #e040fb
--white: #f5f5f5
--gray: #888
--gl: #ccc
```

**Logo:** `SIMONE GIRASOLE` — Raleway weight 200, SIMONE bianco, GIRASOLE `#e040fb`

## COMPORTAMENTO UI

### Modal notizie
- Si apre **sulla pagina corrente** senza navigare a Musica
- Mostra foto reale con overlay tint + fade gradient
- Chiusura: click fuori, click ✕, tasto ESC
- Funzione: `openHomeArticle(idx)` — idx 0=hero, 1-4=news, 5-8=tech

### Sezione Musica
- 4 card notizie con **foto reali** + overlay (stesso stile home news)
- Grid classe `.music-news-grid` — popolata da `buildMusicNewsGrid()`
- Top 10 Dance + Top 10 Mainstream con player audio inline
- Bottom player fisso appare quando parte la musica

### Responsive Mobile
- **Hamburger menu** su ≤ 768px — navbar a tendina
- Hero: 380px su mobile, 320px su schermi piccoli (≤420px)
- News grid: 2 colonne → 1 colonna su ≤420px
- Tech grid: sempre 1 colonna su mobile
- Bio: layout verticale (foto sopra, testo sotto)
- Charts: 1 colonna su mobile (non 2)
- Bottom player: orari nascosti su mobile per spazio

---

## AGGIORNAMENTO SETTIMANALE — FLUSSO COMPLETO

### FASE 1 — Notizie e selezione contenuti

1. Cerca notizie reali della settimana (festival, clubbing, VST/gear, AI music)
2. Proponi all'utente le notizie candidate divise per sezione:
   - 🎪 HERO (1 notizia)
   - 📰 NEWS CLUBBING (scegliere 4 tra 5-6 candidate)
   - 🎛 TECH & GEAR (scegliere 4 tra 5-6 candidate)
   - 🤖 AI (2 notizie)
   - 🎵 DISCO CHE STORIA (1 brano con storia)
3. Fai un **fact check** di ogni notizia prima di proporla
4. Aspetta la selezione dell'utente prima di procedere

### FASE 2 — Foto

**REGOLA CRITICA FOTO:** Le foto vanno caricate su GitHub via API Python (urllib), NON via bash curl (argomenti troppo lunghi). Il container ha whitelist di rete ristretta — solo `api.github.com` e `raw.githubusercontent.com` sono accessibili.

**Flusso foto:**
1. L'utente carica le foto in chat
2. Claude le elabora con Pillow (converti in JPEG, max 1200px, quality 85)
3. Claude le carica su GitHub in `/public/images/` via API Python urllib
4. Nel `content.js` usa il path `/images/nomefoto.jpg`

**Copertine disco:** usa la query iTunes nel campo `q` — la copertina viene caricata automaticamente dal player del sito, non serve scaricarla.

**Upload immagini su GitHub — codice corretto:**
```python
import base64, json, urllib.request, urllib.error

def github_request(method, path, data=None):
    TOKEN = "ghp_[GITHUB_TOKEN]"
    REPO = "SimoneGirasole/simonegirasole-site"
    url = f"https://api.github.com/repos/{REPO}/contents/{path}"
    headers = {
        "Authorization": f"token {TOKEN}",
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json"
    }
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        return json.loads(e.read())

# Upload immagine
with open("/tmp/images/foto.jpg", "rb") as f:
    content_b64 = base64.b64encode(f.read()).decode()

existing = github_request("GET", "public/images/foto.jpg")
sha = existing.get("sha", "")

payload = {"message": "Add image: foto.jpg", "content": content_b64, "branch": "main"}
if sha:
    payload["sha"] = sha

result = github_request("PUT", "public/images/foto.jpg", payload)
```

### FASE 3 — content.js

**Upload content.js su GitHub — stessa funzione github_request:**
```python
content_js = """const WEEKLY_CONTENT = { ... };"""
existing = github_request("GET", "public/content.js")
sha = existing.get("sha", "")
payload = {
    "message": "Update content.js — settimana XX maggio 2026",
    "content": base64.b64encode(content_js.encode()).decode(),
    "branch": "main"
}
if sha:
    payload["sha"] = sha
result = github_request("PUT", "public/content.js", payload)
```

### FASE 4 — Testi social

Dopo approvazione content.js, prepara **3 testi distinti**:

| Piattaforma | Stile | Lunghezza | Hashtag |
|---|---|---|---|
| Instagram | Energico, emoji, domanda finale | ~60 parole | 10 hashtag |
| Facebook | Dettagliato, emoji tematiche, community | ~80 parole | 10 hashtag |
| LinkedIn | Professionale, analitico, poche emoji | ~80 parole | 5 hashtag |

Mostra i testi all'utente per approvazione **prima** di pubblicare.

### FASE 5 — Pubblicazione social

**METODO CORRETTO:** Chiamare il webhook Make **dal browser** tramite tool HTML, NON da bash (hook.eu1.make.com è bloccato dalla whitelist del container).

**Tool HTML da generare:**
```html
<button onclick="pubblica()">PUBBLICA</button>
<script>
async function pubblica() {
  await fetch('https://hook.eu1.make.com/cga1ihumac2iaer5fowbn3yhwskwlr87', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ caption_ig, caption_fb, caption_li, photo_url })
  });
}
</script>
```

**Campi webhook:**
- `caption_ig` → testo Instagram
- `caption_fb` → testo Facebook  
- `caption_li` → testo LinkedIn
- `photo_url` → URL immagine su GitHub raw

---

## MAKE — SCENARIO SOCIAL (ID: 5809330)

### Struttura scenario corretta (maggio 2026)
```
Webhook (5) → Instagram CreatePostPhoto (1) → Facebook CreatePostWithPhotos (2) → LinkedIn CreatePost (4)
```

### Configurazione moduli

**Webhook (Custom webhook, hook ID: 3071122):**
- Campi: `caption_ig`, `caption_fb`, `caption_li`, `photo_url`

**Instagram (instagram-business:CreatePostPhoto, conn: 7551795):**
- `accountId`: 17841400893462950
- `image_url`: `{{5.photo_url}}`
- `caption`: `{{5.caption_ig}}`

**Facebook (facebook-pages:CreatePostWithPhotos, conn: 7551921):**
- `page_id`: 45739628908
- `Photos > Item 1 > Image input type`: Use a photo URL
- `Photos > Item 1 > URL`: `{{5.photo_url}}`
- `Photos > Item 1 > Image caption`: `{{5.caption_fb}}`
- `Post caption`: `{{5.caption_fb}}`

**LinkedIn (linkedin:CreatePost, conn: 7551985):**
- `content`: `{{5.caption_li}}`
- `visibility`: PUBLIC
- `feedDistribution`: MAIN_FEED

### REGOLE CRITICHE MAKE

1. **NON modificare il blueprint via API** (`scenarios_update`) — rende sempre lo scenario `isinvalid: true` perché le connessioni OAuth non possono essere validate via API. Le modifiche al blueprint vanno fatte SOLO dall'interfaccia Make.

2. **`scenarios_run` NON funziona** per scenari instant (webhook) — i dati non arrivano al webhook. Usare sempre il webhook URL direttamente.

3. **Verificare sempre i log** dopo ogni esecuzione con `executions_list` — non fidarsi dello status code della risposta API. Controllare `status`, `operations` ed `error` di ogni esecuzione.

4. **Se un'esecuzione ha meno operazioni del previsto** (es. 2 invece di 4) significa che si è bloccata a metà catena — leggere il campo `error.causeModule` per sapere dove.

---

## ERRORI COMUNI E SOLUZIONI

### ❌ ERRORE: Facebook `(#324) Requires upload file`
**Causa:** Il modulo `facebook-pages:UploadPhoto` richiede file binario, non accetta URL.  
**Soluzione:** Usare `facebook-pages:CreatePostWithPhotos` con `Image input type = Use a photo URL`.  
**Configurazione corretta:** Photos > Item 1 > URL = `{{5.photo_url}}`, Image caption = `{{5.caption_fb}}`, Post caption = `{{5.caption_fb}}`.

### ❌ ERRORE: `isinvalid: true` dopo `scenarios_update` via API
**Causa:** L'API Make non può rivalidare le connessioni OAuth (Instagram, Facebook, LinkedIn) — le connessioni perdono il riferimento quando il blueprint viene riscritto via API.  
**Soluzione:** NON usare `scenarios_update` per modifiche strutturali. Aprire Make, cliccare sul modulo da modificare, fare la modifica manualmente e salvare.

### ❌ ERRORE: APITemplate.io `Invalid property: bgimage`
**Causa:** APITemplate.io era nella catena come generatore di immagini con testo. Il campo `bgimage` nel template richiedeva un formato specifico non documentato.  
**Soluzione:** APITemplate.io è stato **rimosso definitivamente** dalla catena. La foto va direttamente dal webhook ai social — è più semplice, affidabile e senza costi aggiuntivi.

### ❌ ERRORE: LinkedIn non posta (bloccato da Facebook che fallisce)
**Causa:** Lo scenario è sequenziale — se Facebook crasha, LinkedIn non parte.  
**Soluzione:** Risolvere prima il problema Facebook. In futuro considerare router paralleli (da fare SOLO dall'interfaccia Make, non via API).

### ❌ ERRORE: `scenarios_run` non fa partire lo scenario
**Causa:** Lo scenario è `instant: true` (webhook trigger) — `scenarios_run` non inietta i dati nel webhook.  
**Soluzione:** Chiamare sempre il webhook URL direttamente con `fetch()` dal browser.

### ❌ ERRORE: Immagini non caricate su GitHub con bash curl
**Causa:** `subprocess.run(['curl', ...])` con payload base64 grande → `OSError: Argument list too long`.  
**Soluzione:** Usare sempre `urllib.request` Python nativo per le chiamate GitHub API.

### ❌ ERRORE: Domini non raggiungibili dal container bash
**Causa:** Il container ha whitelist ristretta. Accessibili: `api.github.com`, `raw.githubusercontent.com`, `pypi.org`, `npmjs.org`. Bloccati: tutto il resto (hook.eu1.make.com, simonegirasole.com, Unsplash, festival, CDN immagini).  
**Soluzione:** Per chiamate a domini esterni usare artifact HTML che gira nel browser dell'utente.

### ❌ ERRORE: Foto Unsplash nella preview invece di foto reali
**Causa:** Usare URL Unsplash generici invece delle foto reali degli eventi.  
**Soluzione:** Chiedere sempre all'utente di caricare le foto in chat → processarle con Pillow → caricarle su GitHub. Le foto reali vanno in `/public/images/` con nomi descrittivi.

---

## STRUTTURA content.js COMPLETA

```javascript
const WEEKLY_CONTENT = {
  disco: {
    title: "Seven Days and One Week",
    artist: "B.B.E.",
    year: "1996",
    genre: "Dream House / Trance",
    desc: "Testo storia del brano...",
    q: "BBE Seven Days and One Week"  // query iTunes per copertina+preview
  },
  ticker: "★ Notizia1 &nbsp;&nbsp; ★ Notizia2 &nbsp;&nbsp; ★",
  hero: {
    tag: "Festival · Italia",
    title: "Titolo Hero",
    sub: "Sommario breve",
    text: "Testo completo articolo...",
    photo: "/images/nomefoto.jpg",   // path locale GitHub
    tint: "rgba(10,0,30,0.55),rgba(40,0,80,0.35)"
  },
  news: [ /* 4 oggetti */ ],
  tech: [ /* 4 oggetti */ ],
  ai: [ /* 2 oggetti */ ],
  danceChart: [ /* 10 brani {pos, title, artist, q} */ ],
  mainChart:  [ /* 10 brani {pos, title, artist, q} */ ]
};
```

### Struttura oggetto news/tech/ai
```javascript
{
  tag: "Festival · Italia",
  tagColor: "#7c3aed",
  title: "Titolo articolo",
  sub: "Sommario breve (1 riga)",
  text: "Testo articolo max 5 righe",
  photo: "/images/nomefoto.jpg",
  tint: "rgba(0,10,26,0.6),rgba(0,32,96,0.4)"
}
```

> **Nota tint colori:**
> - Clubbing/notturno: `rgba(4,0,26,0.6),rgba(26,0,80,0.4)` (viola scuro)
> - Festival/estate: `rgba(12,5,0,0.6),rgba(58,16,0,0.4)` (arancio scuro)
> - Tech/gear: `rgba(0,8,15,0.6),rgba(0,32,64,0.4)` (blu scuro)
> - AI: `rgba(0,15,20,0.6),rgba(0,48,64,0.4)` (blu petrolio)

---

## SISTEMA AUDIO

### iTunes API proxy
```
GET /api/search?q=Faithless+New+Religion&limit=5&country=US
→ { results: [{ trackName, artistName, previewUrl, artworkUrl, artworkUrlSmall }] }
```

### Proxy audio
```
GET /api/proxy?url=https://audio-ssl.itunes.apple.com/...
→ stream audio (aggira CORS, gestisce redirect Apple fino a 6)
```

## DNS CONFIGURAZIONE

| Record | Nome | Valore |
|---|---|---|
| A | `simonegirasole.com` | `76.76.21.21` (Vercel) |
| A | `www.simonegirasole.com` | `76.76.21.21` (Vercel) |
| MX | `simonegirasole.com` | `mx10/20/30.mailspamprotection.com` |

> ⚠️ NON toccare i record MX — gestiscono le email del dominio

## CONNETTORI CLAUDE DISPONIBILI

- **Vercel** → connesso come `simonegirasolem2o-3000`
- **Make** → connesso — lettura log e scenario info. NON modificare blueprint via API
- **GitHub** → accesso via API Python urllib con token (NON connettore nativo)

## PAGINE DEL SITO

### Home
- Hero grande con foto da `/public/images/`
- 4 news Clubbing con foto + overlay → aprono modale IN HOME
- 4 news Tech & Gear con foto + overlay → aprono modale IN HOME
- Disco Che Storia con player iTunes

### Bio
- Foto `/simone-girasole.jpg`
- Carriera: RDS 1998 → Radio Capital 1999 → m2o 2002 → Radio Deejay 2018 → TgZero 2019

### Musica
- 4 card notizie con foto reali (stesse news della home)
- Top 10 Dance e Top 10 Mainstream con player audio
- Bottom player fisso

### Link
- LinkedIn, Facebook, Instagram, X, SoundCloud, Email booking

## CHANGELOG

### Maggio 2026 — Aggiornamento settimanale 20 maggio
- **Immagini:** cartella `/public/images/` su GitHub — foto reali degli eventi caricabili da Claude via API Python
- **Sezione AI:** aggiunta con 2 card (Yuma + Suno Studio)
- **Social publishing:** scenario Make 5809330 operativo con webhook diretto
- **Facebook:** modulo cambiato da `UploadPhoto` a `CreatePostWithPhotos` (accetta URL)
- **APITemplate.io:** rimosso dalla catena — inutile e fonte di errori
- **Tool HTML:** `posta_social.html` con 3 testi distinti per IG/FB/LI + chiamata webhook browser
- Modal notizie: si apre in home senza navigare alla sezione Musica
- Responsive mobile completo con hamburger menu
- Architettura dati semplificata: array `allArticles[]` unico
- Rimosso `typography.css` separato — tutto in `index.html`

### Errori risolti maggio 2026
1. APITemplate `bgimage` → rimosso dall'automazione
2. Facebook `#324` → sostituito modulo con `CreatePostWithPhotos`
3. `scenarios_update` invalida scenario → modifiche blueprint SOLO da UI Make
4. `scenarios_run` non funziona su scenari webhook → usare fetch() dal browser
5. curl bash su payload grande → usare urllib Python nativo
6. LinkedIn bloccato da Facebook in errore → risolvere Facebook prima

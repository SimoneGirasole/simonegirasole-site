// ═══════════════════════════════════════════════════════════
// SIMONE GIRASOLE — CONTENUTI SETTIMANALI
// Aggiornato automaticamente ogni lunedì da Make
// Ultima modifica: settimana 19 · 2026
// ═══════════════════════════════════════════════════════════

const WEEKLY_CONTENT = {

  // ── DISCO CHE STORIA DELLA SETTIMANA ──────────────────────
  disco: {
    title: "Your Love",
    artist: "Frankie Knuckles",
    year: "1987",
    genre: "Chicago House",
    desc: "Il brano fondativo dell'house music. Distribuito su cassetta prima ancora di avere un'uscita ufficiale, ha trasformato il Warehouse di Chicago in una cattedrale della danza.",
    q: "Frankie Knuckles Your Love Jamie Principle"
  },

  // ── TICKER ────────────────────────────────────────────────
  ticker: "★ Cercle Festival 2026: 22-24 maggio a Parigi · 44 artisti su 3 palchi &nbsp;&nbsp;&nbsp; ★ Gabry Ponte a San Siro: 27 giugno la più grande dancefloor italiana &nbsp;&nbsp;&nbsp; ★ IMS Ibiza 2026: Pete Tong, Eliza Rose e Jazzy protagonisti &nbsp;&nbsp;&nbsp; ★ Kappa FuturFestival Torino 3-5 luglio: Sven Väth e Charlotte de Witte &nbsp;&nbsp;&nbsp; ★ Transfigure VST: resintesi spettrale a 120 oscillatori per producer &nbsp;&nbsp;&nbsp; ★ Ableton Live 12.1: nuovi dispositivi MIDI e workflow ottimizzato &nbsp;&nbsp;&nbsp;",

  // ── HERO — notizia principale ─────────────────────────────
  hero: {
    tag: "Clubbing",
    title: "Cercle Festival 2026: tre giorni di musica nell'aeroporto storico di Parigi",
    sub: "Dal 22 al 24 maggio al Musée de l'Air et de l'Espace di Le Bourget. Eric Prydz, ARTBAT, Ben Böhmer, Vintage Culture tra i 44 artisti in lineup.",
    text: "Il Cercle Festival torna nel 2026 al Musée de l'Air et de l'Espace di Le Bourget, Parigi, dal 22 al 24 maggio. Dopo il successo del 2024 con 24.000 spettatori, quest'anno il festival si estende a tre giorni con 44 artisti su tre palchi unici: lo stage A380 sotto il più grande aereo passeggeri del mondo, l'Ariane stage davanti a un razzo di 54 metri e il Concorde stage tra due aerei supersonici. In lineup Eric Prydz, ARTBAT, Ben Böhmer, Vintage Culture, Adriatique, Kölsch, Monolink e molti altri.",
    photo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80",
    tint: "rgba(4,0,26,0.6),rgba(26,0,80,0.4)"
  },

  // ── 4 NEWS CLUBBING ───────────────────────────────────────
  news: [
    {
      tag: "Festival · Italia",
      tagColor: "#1060cc",
      title: "Gabry Ponte a San Siro: la più grande dancefloor italiana",
      sub: "70.000 persone il 27 giugno allo Stadio San Siro di Milano.",
      text: "Il 27 giugno 2026 lo Stadio San Siro di Milano si trasforma nella più grande dancefloor d'Italia con Gabry Ponte come protagonista assoluto. Con oltre 70.000 posti disponibili, l'evento San Siro Dance promette di riscrivere la storia della musica elettronica italiana.",
      photo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
      tint: "rgba(0,10,26,0.6),rgba(0,32,96,0.4)"
    },
    {
      tag: "Ibiza · IMS 2026",
      tagColor: "#7c1090",
      title: "IMS Ibiza 2026: Pete Tong, Eliza Rose e Jazzy protagonisti",
      sub: "L'International Music Summit torna dal 22 al 24 aprile.",
      text: "L'International Music Summit 2026 si è svolto ad Ibiza dal 22 al 24 aprile con un programma ricco di conferenze, panel e performance dal vivo. Pete Tong ha aperto i lavori con un keynote sull'evoluzione della scena dance globale.",
      photo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      tint: "rgba(13,0,21,0.6),rgba(61,0,96,0.4)"
    },
    {
      tag: "Open Air · Milano",
      tagColor: "#006630",
      title: "Vision Open Air: Ilario Alicante apre la stagione all'Ex Macello",
      sub: "Il 1° maggio a Milano con il format L/NK.",
      text: "Il 1° maggio 2026 l'Ex Macello di Milano ha ospitato l'opening della stagione outdoor di Vision con Ilario Alicante e il suo format L/NK. L'evento ha segnato il debutto della nuova area outdoor della venue milanese.",
      photo: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",
      tint: "rgba(0,18,8,0.6),rgba(0,64,32,0.4)"
    },
    {
      tag: "Kappa · Torino",
      tagColor: "#883000",
      title: "Kappa FuturFestival 2026: Sven Väth e Charlotte de Witte headliner",
      sub: "Dal 3 al 5 luglio a Torino.",
      text: "Il Kappa FuturFestival 2026 si terrà dal 3 al 5 luglio a Torino con un lineup che include Sven Väth, Charlotte de Witte e le resident del Berghain in un B2B esclusivo. Giunto alla sua quattordicesima edizione.",
      photo: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&q=80",
      tint: "rgba(18,5,0,0.6),rgba(61,16,0,0.4)"
    }
  ],

  // ── 4 TECH & GEAR ─────────────────────────────────────────
  tech: [
    {
      tag: "VST · Sound Design",
      tagColor: "#5020aa",
      title: "Transfigure: resintesi spettrale a 120 oscillatori",
      sub: "Il plugin che trasforma qualsiasi suono in texture uniche.",
      text: "Transfigure è il nuovo plugin VST che sta rivoluzionando il sound design per DJ e producer. Basato su un motore di resintesi spettrale con 120 oscillatori, permette di trasformare in tempo reale qualsiasi suono in texture mai sentite prima.",
      photo: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
      tint: "rgba(8,0,24,0.65),rgba(32,0,80,0.45)"
    },
    {
      tag: "Hardware · Akai",
      tagColor: "#004488",
      title: "Akai MPC Sample 2026: beatmaking portatile ridefinito",
      sub: "Il nuovo campionatore tascabile con touch e USB-C.",
      text: "Akai ha presentato l'MPC Sample 2026, il nuovo campionatore portatile che ridefinisce il concetto di beatmaking mobile. Con interfaccia touch capacitiva, connettività USB-C e 16 pad retroilluminati.",
      photo: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80",
      tint: "rgba(0,8,15,0.65),rgba(0,32,64,0.45)"
    },
    {
      tag: "AI Plugin · Sonible",
      tagColor: "#005520",
      title: "Sonible pure:level: l'AI che cambia il modo di mixare",
      sub: "Level rider intelligente per tracce e mix.",
      text: "Sonible ha lanciato pure:level, il nuovo plugin AI per il livellamento automatico di tracce e mix. A differenza dei tradizionali compressori, pure:level analizza il contenuto musicale con intelligenza artificiale.",
      photo: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80",
      tint: "rgba(4,15,0,0.65),rgba(16,64,0,0.45)"
    },
    {
      tag: "DAW · Ableton",
      tagColor: "#882200",
      title: "Ableton Live 12.1: nuovi dispositivi MIDI e workflow ottimizzato",
      sub: "L'aggiornamento che i producer aspettavano.",
      text: "Ableton ha rilasciato Live 12.1, aggiornamento gratuito per tutti gli utenti di Live 12 che introduce nuovi dispositivi MIDI nativi, miglioramenti al routing e nuove funzionalità per i producer di musica elettronica.",
      photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      tint: "rgba(15,4,0,0.65),rgba(58,16,0,0.45)"
    }
  ],

  // ── CLASSIFICA DANCE ──────────────────────────────────────
  danceChart: [
    {pos:1, title:"Puff Puff Pass", artist:"Kitty Hall", q:"Kitty Hall Puff Puff Pass"},
    {pos:2, title:"New Religion", artist:"Faithless, Bebe Rexha", q:"Faithless Bebe Rexha New Religion 2026"},
    {pos:3, title:"Surrender", artist:"Westend, Lizzy Land", q:"Westend Surrender original mix 2026"},
    {pos:4, title:"RUDEBOY", artist:"SLVL", q:"SLVL RUDEBOY original mix 2026"},
    {pos:5, title:"World Is Mine", artist:"Lane 8, Kasbo", q:"Lane 8 Kasbo BJOERN World Is Mine"},
    {pos:6, title:"The Way I Are", artist:"Timbaland, Max Dean", q:"Timbaland Max Dean Remix Extended Way I Are"},
    {pos:7, title:"No Broke Boys", artist:"Tinashe, Disco Lines", q:"Disco Lines Tinashe No Broke Boys"},
    {pos:8, title:"Blessings", artist:"Calvin Harris", q:"Calvin Harris Clementine Douglas Blessings"},
    {pos:9, title:"Loco Loco", artist:"Reinier Zonneveld, Gordo", q:"Reinier Zonneveld Gordo Loco Loco"},
    {pos:10, title:"Elevator", artist:"Discip", q:"Discip Elevator"}
  ],

  // ── CLASSIFICA MAINSTREAM ─────────────────────────────────
  mainChart: [
    {pos:1, title:"Surrender", artist:"Westend, Lizzy Land", q:"Westend Surrender original mix mainstage 2026"},
    {pos:2, title:"Désenchantée 3000", artist:"Kate Ryan, Blasterjaxx", q:"Blasterjaxx Kate Ryan Desenchantee 3000"},
    {pos:3, title:"Vem Comigo", artist:"Armin van Buuren", q:"Armin van Buuren Vem Comigo"},
    {pos:4, title:"Caramelle", artist:"Mesto", q:"Mesto Caramelle"},
    {pos:5, title:"Science", artist:"deadmau5, Stevie Appleton", q:"deadmau5 Stevie Appleton Science"},
    {pos:6, title:"Bigger Than Techno", artist:"Lilly Palmer, Armin van Buuren", q:"Lilly Palmer Bigger Than Techno"},
    {pos:7, title:"Makina Time", artist:"Dimitri Vegas & Like Mike", q:"Dimitri Vegas Like Mike Makina Time"},
    {pos:8, title:"Be The One", artist:"Adam Port, SG Lewis", q:"Adam Port SG Lewis Keinemusik Be The One"},
    {pos:9, title:"Like That", artist:"Marco Faraone", q:"Marco Faraone Like That"},
    {pos:10, title:"How Does It Feel", artist:"Fezzo, Dubdogz, Zaark", q:"Dubdogz Fezzo Zaark How Does It Feel"}
  ]

};

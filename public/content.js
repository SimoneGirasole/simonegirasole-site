const WEEKLY_CONTENT = {

  /* ─────────────────────────────────────────
     DISCO CHE STORIA DELLA SETTIMANA
  ───────────────────────────────────────── */
  disco: {
    title: "Show Me Love",
    artist: "Robin S",
    year: "1993",
    genre: "Deep House / Dance",
    desc: "Uno dei brani house più iconici degli anni \'90. Prodotto da Allen George e Fred McFarlane, Show Me Love esplode nel 1993 trasformando Robin S in una delle voci simbolo della dance internazionale. Il giro di piano, il basso pulsante e quella voce potente e graffiante hanno conquistato le classifiche di mezzo mondo e ancora oggi fanno muovere qualsiasi dancefloor. Un classico senza tempo della club culture.",
    q: "Robin S Show Me Love"
  },

  /* ─────────────────────────────────────────
     TICKER
  ───────────────────────────────────────── */
  ticker: "★ Nameless Festival 2026: Calvin Harris, Fisher e John Summit — 90.000 presenze a Lecco   ★ Kappa FuturFestival 3-5 luglio Torino: Solomun, Four Tet, Chris Lake — biglietti esauriti   ★ Centrale Elettronica Festival: 27-28 giugno Brescia — Goodboys, A-Trak, Ferreck Dawn   ★ Electropark Genova: 5 giugno-5 luglio, 50 artisti da 25 paesi   ★ Ibiza 2026: stagione aperta — Ushuaïa, DC-10 e Hi Ibiza annunciano le lineup   ★ Serum 2: aggiornamento gratuito per tutti i possessori del synth originale   ★ Beatport: Tech House e Mainstage dominano le chart di giugno   ★",

  /* ─────────────────────────────────────────
     HERO
  ───────────────────────────────────────── */
  hero: {
    tag: "Festival · Lecco",
    title: "Nameless 2026: Calvin Harris, Fisher e John Summit riscrivono la storia",
    sub: "90.000 presenze al Bione di Lecco, 5 palchi e il ritorno di Calvin Harris in Italia dopo 13 anni. Il festival è già leggendario.",
    text: "Il Nameless Festival 2026 ha chiuso la sua edizione più ambiziosa di sempre. Dal 30 maggio al 1° giugno, il Centro Sportivo Bione di Lecco — con il Lago di Como come sfondo naturale — ha ospitato oltre 90.000 persone in tre giorni di musica non-stop. Calvin Harris ha aperto i giochi venerdì 30 maggio con un set che ha riportato in Italia uno degli artisti più attesi degli ultimi tredici anni. John Summit ha dominato il sabato con il suo tech house fluido e ipnotico, mentre FISHER ha chiuso domenica con l\'energia brutale e ironica che lo ha reso uno dei DJ più amati del pianeta.",
    photo: "/images/Nameless_2026.png",
    tint: "rgba(0,8,20,0.55),rgba(0,30,80,0.35)"
  },

  /* ─────────────────────────────────────────
     NEWS CLUBBING — 4 articoli
  ───────────────────────────────────────── */
  news: [
    {
      tag: "Festival · Torino",
      tagColor: "#5020aa",
      title: "Kappa FuturFestival XIII: lineup completo — Torino è pronta",
      sub: "3-5 luglio al Parco Dora con Solomun, Four Tet, Chris Lake e oltre 120 artisti. Sold out.",
      text: "La tredicesima edizione del Kappa FuturFestival torna al Parco Dora di Torino dal 3 al 5 luglio 2026. Oltre 120 artisti internazionali: Solomun, Four Tet, Chris Lake, Maceo Plex e Seth Troxler. I biglietti sono esauriti da settimane.",
      photo: "/images/Kappa_Fututre_Festival_2026.png",
      tint: "rgba(4,0,20,0.6),rgba(20,0,70,0.4)"
    },
    {
      tag: "Ibiza · Estate 2026",
      tagColor: "#006688",
      title: "Ibiza 2026: stagione aperta, i grandi club svelano le lineup",
      sub: "Ushuaïa, DC-10, Hi Ibiza e Pacha: ecco chi suonerà sull\'isola questa estate.",
      text: "La stagione ibizenca 2026 è ufficialmente aperta. Ushuaïa con Martin Garrix e David Guetta, DC-10 con Drumcode e Circoloco, Hi Ibiza con Armin van Buuren e Charlotte de Witte, Pacha con Defected e Nic Fanciulli.",
      photo: "/images/Ushuaia_di_Ibiza_2026.png",
      tint: "rgba(0,15,25,0.55),rgba(0,50,80,0.35)"
    },
    {
      tag: "Festival · Genova",
      tagColor: "#005540",
      title: "Electropark 2026: Genova capitale europea dell\'elettronica diffusa",
      sub: "Dal 5 giugno al 5 luglio, un mese di musica in luoghi storici della città con 50 artisti da 25 paesi.",
      text: "La quindicesima edizione di Electropark trasforma Genova in un organismo sonoro per un intero mese. 50 artisti da 25 paesi in luoghi storici della città come il Chiostro di Sant\'Andrea e il Galata Museo del Mare.",
      photo: "/images/Electropark_Festival_Genova_2026.png",
      tint: "rgba(0,12,8,0.6),rgba(0,45,30,0.4)"
    },
    {
      tag: "Festival · Brescia",
      tagColor: "#882200",
      title: "Centrale Elettronica: il nuovo festival del cuore industriale di Brescia",
      sub: "27-28 giugno all\'Area Feste di Sant\'Eufemia con Goodboys, A-Trak, Ferreck Dawn e Matt Sassari.",
      text: "Brescia si accende con Centrale Elettronica, il 27 e 28 giugno all\'Area Feste di Sant\'Eufemia. Tre palchi con Goodboys, A-Trak, Ferreck Dawn, Matt Sassari e le crew della scena bresciana.",
      photo: "/images/Centrale_elettronica_Brescia_ok.jpg",
      tint: "rgba(15,2,0,0.6),rgba(60,10,0,0.4)"
    }
  ],

  /* ─────────────────────────────────────────
     TECH & GEAR — 4 articoli
  ───────────────────────────────────────── */
  tech: [
    {
      tag: "Synth · VST",
      tagColor: "#004488",
      title: "Serum 2: aggiornamento gratuito e un motore completamente nuovo",
      sub: "Granular, multisample, spectral synthesis e sequencer integrato. Il synth dell\'era moderna.",
      text: "Xfer Records ha rilasciato Serum 2 dopo 11 anni. Nuova sintesi granulare, multisample e spettrale. Aggiornamento gratuito per i possessori della versione originale, $189 per i nuovi utenti.",
      photo: "/images/serum_2.png",
      tint: "rgba(0,5,18,0.65),rgba(0,20,70,0.4)"
    },
    {
      tag: "Plugin · Dynamics",
      tagColor: "#005530",
      title: "Sonible smart:comp 2 — compressione spettrale intelligente",
      sub: "Analisi spettrale in tempo reale, 8 canali indipendenti e AI che impara dal materiale audio.",
      text: "Sonible lancia smart:comp 2 con Spectral Compression in tempo reale, 8 istanze con channel linking, modalità mid/side e delta monitoring. Ideale su drum bus, mix bus e tracce vocali.",
      photo: "/images/sonible_smartcomp2.jpg",
      tint: "rgba(0,12,6,0.65),rgba(0,48,24,0.4)"
    },
    {
      tag: "AI · DAW",
      tagColor: "#00558a",
      title: "Yuma: l\'assistente AI che produce musica conversando con Ableton",
      sub: "Crea tracce, accordi, melodie e automazioni parlando. Beta a $39 una tantum per macOS e Windows.",
      text: "Yuma controlla Ableton Live attraverso il linguaggio naturale. Crea progressioni di accordi, melodie e tracce complete. Funziona anche con Logic Pro e FL Studio. Beta a $39 una tantum con 3.900 crediti.",
      photo: "/images/Ableton-Live-12.png",
      tint: "rgba(0,8,16,0.65),rgba(0,30,60,0.4)"
    },
    {
      tag: "Hardware · Roland",
      tagColor: "#771100",
      title: "Roland SP-404 MK3: firmware rivoluzionario per il sampler portatile",
      sub: "Synth layer integrato, effetti AI e workflow rinnovato per live e studio.",
      text: "Roland aggiorna il leggendario SP-404 con synth layer integrato, effetti AI per granularizzazione e time-stretching avanzato. Compatibile con tutti i bank di campioni dei modelli precedenti.",
      photo: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=900&q=80",
      tint: "rgba(15,3,0,0.65),rgba(60,12,0,0.4)"
    }
  ],

  danceChart: [
    {pos:1,  title:"Baby",             artist:"Prospa, Murda Beatz",                q:"Prospa Murda Beatz Baby CircoLoco Extended"},
    {pos:2,  title:"See-Line Woman",   artist:"Nina Simone, Mochakk",               q:"Nina Simone Mochakk See Line Woman Mix"},
    {pos:3,  title:"How Does It Feel", artist:"Fezzo, Dubdogz, Zaark",              q:"Fezzo Dubdogz Zaark How Does It Feel Extended"},
    {pos:4,  title:"Bad Wolf",         artist:"Michael Bibi",                       q:"Michael Bibi Bad Wolf Extended"},
    {pos:5,  title:"Freaky !",         artist:"Ali Love, Vintage Culture, Max Styler", q:"Ali Love Vintage Culture Max Styler Freaky"},
    {pos:6,  title:"Make You Fight",   artist:"Chris Lake, ATRIP",                  q:"Chris Lake ATRIP Make You Fight Extended"},
    {pos:7,  title:"Morning Coffee",   artist:"Jitwam, GUDFELLA",                   q:"Jitwam GUDFELLA Morning Coffee Extended"},
    {pos:8,  title:"So Hot!",          artist:"Jake Bleu, Edris Omar",              q:"Jake Bleu Edris Omar So Hot Extended"},
    {pos:9,  title:"La La Land",       artist:"Green Velvet, Meduza, GENESI (ITA)", q:"Green Velvet Meduza La La Land Extended"},
    {pos:10, title:"Break It",         artist:"Juntaro, HILLS (US)",                q:"Juntaro HILLS Break It Extended Mainstage"}
  ],

  mainChart: [
    {pos:1,  title:"Sweet Disposition (Remix)",  artist:"Temper Trap, John Summit & Silver Panda", q:"Temper Trap John Summit Silver Panda Sweet Disposition Remix"},
    {pos:2,  title:"You Gonna Want Me",          artist:"Tiga vs Meduza",                          q:"Tiga Meduza You Gonna Want Me Extended"},
    {pos:3,  title:"Enjoy the Silence",          artist:"Don Diablo, MONO|CHROME",                 q:"Don Diablo Enjoy the Silence Extended Version"},
    {pos:4,  title:"Vem Comigo",                 artist:"Armin van Buuren",                        q:"Armin van Buuren Vem Comigo Extended"},
    {pos:5,  title:"Save Me Tonight",            artist:"Jennifer Lopez, David Guetta",            q:"Jennifer Lopez David Guetta Save Me Tonight"},
    {pos:6,  title:"Do You Want It Right Now",   artist:"Quintino, Breathe Carolina",              q:"Quintino Breathe Carolina Do You Want It Right Now Extended"},
    {pos:7,  title:"Bigger Than Techno",         artist:"Lilly Palmer, Armin van Buuren",          q:"Lilly Palmer Armin van Buuren Bigger Than Techno"},
    {pos:8,  title:"How Does It Feel",           artist:"Fezzo, Dubdogz, Zaark",                  q:"Dubdogz Fezzo Zaark How Does It Feel"},
    {pos:9,  title:"Makina Time",                artist:"Dimitri Vegas & Like Mike",               q:"Dimitri Vegas Like Mike Makina Time"},
    {pos:10, title:"Be The One",                 artist:"Adam Port, SG Lewis",                    q:"Adam Port SG Lewis Keinemusik Be The One"}
  ]

};

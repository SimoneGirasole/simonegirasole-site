// Vercel Serverless Function — proxy per iTunes Search API
// Risolve il blocco CORS del browser permettendo preview MP3 gratis

export default async function handler(req, res) {
  // CORS headers — permette chiamate dal browser
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { q, limit = 5 } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&media=music&limit=${limit}&country=IT`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`iTunes API error: ${response.status}`);
    }

    const data = await response.json();

    // Restituisce solo i campi necessari, puliti
    const results = data.results
      .filter(t => t.previewUrl) // Solo brani con preview disponibile
      .map(t => ({
        trackId: t.trackId,
        trackName: t.trackName,
        artistName: t.artistName,
        collectionName: t.collectionName,
        previewUrl: t.previewUrl,
        artworkUrl: t.artworkUrl100
          ? t.artworkUrl100.replace('100x100bb', '600x600bb')
          : null,
        artworkUrlSmall: t.artworkUrl100
          ? t.artworkUrl100.replace('100x100bb', '200x200bb')
          : null,
        trackViewUrl: t.trackViewUrl,
        releaseDate: t.releaseDate,
        genre: t.primaryGenreName,
      }));

    // Cache 1 ora
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json({ results, resultCount: results.length });

  } catch (error) {
    console.error('iTunes proxy error:', error);
    return res.status(500).json({ error: 'Errore nel recupero dati da iTunes' });
  }
}

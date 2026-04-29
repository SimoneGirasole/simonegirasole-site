// Vercel Serverless Function — proxy iTunes Search API (CommonJS)
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const q = req.query.q;
  const limit = req.query.limit || 5;
  const country = req.query.country || 'US';

  if (!q) return res.status(400).json({ error: 'Query parameter "q" is required' });

  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&media=music&limit=${limit}&country=${country}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`iTunes API error: ${response.status}`);
    const data = await response.json();

    const results = (data.results || [])
      .filter(t => t.previewUrl)
      .map(t => ({
        trackId: t.trackId,
        trackName: t.trackName,
        artistName: t.artistName,
        collectionName: t.collectionName,
        previewUrl: t.previewUrl,
        artworkUrl: t.artworkUrl100 ? t.artworkUrl100.replace('100x100bb','600x600bb') : null,
        artworkUrlSmall: t.artworkUrl100 ? t.artworkUrl100.replace('100x100bb','200x200bb') : null,
        releaseDate: t.releaseDate,
        genre: t.primaryGenreName,
      }));

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json({ results, resultCount: results.length });

  } catch (error) {
    return res.status(500).json({ error: 'Errore iTunes API', details: error.message });
  }
};

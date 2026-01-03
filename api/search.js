export default async function handler(req, res) {
  try {
    const { q } = req.query;

    const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
}

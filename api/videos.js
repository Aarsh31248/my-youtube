export default async function handler(req, res) {
  try {
    const { videoId } = req.query;

    const BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos";

    const url = videoId
      ? `${BASE_URL}?part=snippet,statistics&id=${videoId}&key=${process.env.YT_API_KEY}`
      : `${BASE_URL}?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=50&key=${process.env.YT_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}

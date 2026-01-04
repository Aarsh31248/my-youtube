export const handler = async (event) => {
  try {
    const API_KEY = process.env.YT_API_KEY;

    if (!API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key missing" }),
      };
    }

    const videoId = event.queryStringParameters?.videoId;
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos";

    const url = videoId
      ? `${BASE_URL}?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      : `${BASE_URL}?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=50&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Failed to fetch videos" }),
    };
  }
};

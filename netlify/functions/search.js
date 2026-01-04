export const handler = async (event) => {
  try {
    const q = event.queryStringParameters?.q;

    if (!q) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Query missing" }),
      };
    }

    const url =
      `https://suggestqueries.google.com/complete/search` +
      `?client=firefox&ds=yt&q=${encodeURIComponent(q)}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Failed to fetch suggestions" }),
    };
  }
};

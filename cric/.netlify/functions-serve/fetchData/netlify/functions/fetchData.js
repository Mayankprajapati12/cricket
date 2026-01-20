// netlify/functions/fetchData.js
exports.handler = async function(event, context) {
  const BASE_URL = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1";
  const API_KEY = process.env.VITE_ryukIDkey;
  const { endpoint } = event.queryStringParameters;
  if (!endpoint) {
    return { statusCode: 400, body: "Missing endpoint parameter" };
  }
  const targetUrl = `${BASE_URL}/${endpoint}`;
  try {
    const response = await fetch(targetUrl, {
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com"
        // 'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
//# sourceMappingURL=fetchData.js.map

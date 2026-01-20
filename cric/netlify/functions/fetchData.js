// netlify/functions/fetchData.js
exports.handler = async function (event) {
  // console.log('evemt:::', event)
  const base_urls = {
    'matches': { base_url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1' },
    'scorecard': { base_url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1' },
  }
  const API_KEY = [process.env.Secret_ryukIDkey, process.env.Secret_oldIDkey];
  const API_HOST = process.env.Secret_apihost
  const { endpoint, service } = event.queryStringParameters;

  const selectedBase = base_urls[service];
  if (!endpoint) {
    return { statusCode: 400, body: "Missing endpoint parameter" };
  }
  const targetUrl = `${selectedBase.base_url}/${endpoint}`;
  for (const key of API_KEY) {
    try {
      const response = await fetch(targetUrl, {
        headers: {
          'X-RapidAPI-Key': `${key}`,
          'X-RapidAPI-Host': `${API_HOST}`,
          'Content-Type': 'application/json',
        },
      }); 
      if (response.ok) {
        console.log("res::::", response);
        return { statusCode: 200, body: JSON.stringify(await response.json()) };
      } 
      console.log("Key failed, trying next...");

    } catch (error) {
      console.log("Error fetching data:", error.message);
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
  }
  return { statusCode: 500, body: "All API keys limit." }
};
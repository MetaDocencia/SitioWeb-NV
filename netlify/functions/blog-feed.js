// netlify/functions/blog-feed.js
// Proxy del RSS para evitar CORS y servirlo desde tu dominio en Netlify.

exports.handler = async (event, context) => {
  const FEED = 'https://www.metadocencia.org/post/index.xml';

  try {
    const res = await fetch(FEED, {
      headers: { 'User-Agent': 'mdnv-feed-proxy/1.0' },
    });

    if (!res.ok) {
      return {
        statusCode: 502,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
        body: `Upstream error: ${res.status} ${res.statusText}`,
      };
    }

    const xml = await res.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        // Cache: CDN 15 min, browser 5 min
        'Cache-Control': 'public, s-maxage=900, max-age=300',
      },
      body: xml,
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: `Fetch failed: ${err.message}`,
    };
  }
};

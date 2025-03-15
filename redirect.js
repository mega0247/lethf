// api/redirect.js
export default function handler(req, res) {
  const { path } = req.query;
  
  // Redirect all requests to earthbluerelocation.com
  res.writeHead(301, { Location: `https://earthbluerelocation.com` });
  res.end();
}

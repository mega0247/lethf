// pages/api/redirect.js
export default function handler(req, res) {
  const { path } = req.query;
  if (path) {
    // Construct the redirect URL
    const redirectUrl = `https://earthbluerelocation.com/${path}`;
    return res.redirect(301, redirectUrl);  // Permanent redirect (301)
  } else {
    // Return a 400 if the 'path' query parameter is missing
    return res.status(400).send('Missing path parameter');
  }
}

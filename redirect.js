module.exports = (req, res) => {
  const { subdomain, path } = req.query;

  // Here you can map short URL to your actual destination URL
  if (subdomain && path) {
    // Example: If '50' is passed, redirect to the specific URL
    if (path === '50') {
      res.redirect('https://earthbluerelocation.com');
    } else {
      res.status(404).send('Not Found');
    }
  } else {
    res.status(400).send('Bad Request');
  }
};

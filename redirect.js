module.exports = (req, res) => {
  const { subdomain, path } = req.query;

  // Example logic for redirection
  if (subdomain && path) {
    // Here you can map the short URL to your original URL
    // For instance, if path = '50', redirect to the desired URL
    if (path === '50') {
      res.redirect('https://earthbluerelocation.com');
    } else {
      res.status(404).send('Not Found');
    }
  } else {
    res.status(400).send('Bad Request');
  }
};

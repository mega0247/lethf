module.exports = (req, res) => {
  const { subdomain, path } = req.query;

  // If both subdomain and path are provided
  if (subdomain && path) {
    // Define the mapping for each short URL path to the real destination
    if (path === 'TU') {
      return res.redirect('https://earthbluerelocation.com');
    }
    // Add more path mappings as needed
    else {
      // If no specific path found, return a 404
      return res.status(404).send('Not Found');
    }
  }

  // If no subdomain or path provided, return a 400 error
  return res.status(400).send('Bad Request');
};

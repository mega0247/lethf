module.exports = (req, res) => {
  const { shortUrl } = req.query;

  // Define the mappings for the short URL (2 characters) to the destination URL
  const urlMappings = {
    "50": "https://earthbluerelocation.com",
    "65": "https://earthbluerelocation.com",
    "yw": "https://earthbluerelocation.com",
    "Bx": "https://earthbluerelocation.com",
    // Add more mappings here...
  };

  // Find the destination URL based on the short URL
  const destinationUrl = urlMappings[shortUrl];

  // Redirect to the original URL if found
  if (destinationUrl) {
    res.redirect(destinationUrl);
  } else {
    res.status(404).send('Not Found');
  }
};

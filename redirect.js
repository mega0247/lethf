module.exports = (req, res) => {
  res.writeHead(301, {
    Location: 'https://earthbluerelocation.com'
  });
  res.end();
};

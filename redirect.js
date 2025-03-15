// api/redirect.js

module.exports = (req, res) => {
    const { shortUrl } = req.query; // Extract the short URL from the query

    // Redirect to the original URL
    res.redirect(301, 'https://earthbluerelocation.com');
};

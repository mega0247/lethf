// pages/api/redirect.js
export default async function handler(req, res) {
    // This is the destination where users will be redirected
    const destination = 'https://earthbluerelocation.com';

    // Get the path from the URL
    const { path } = req.query;

    // Perform the redirect
    if (path) {
        // Redirect to the main domain
        res.redirect(301, destination);
    } else {
        // Handle the case where the path is missing
        res.status(400).json({ message: 'Invalid request' });
    }
}

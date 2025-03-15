// pages/api/redirect.js
export default async function handler(req, res) {
    try {
        const { path } = req.query;

        // Log the incoming request path for debugging
        console.log('Redirect Path:', path);

        // Validate if the path is correct
        if (!path) {
            return res.status(400).json({ message: 'Invalid path' });
        }

        // Perform the redirect to the main site
        const destination = 'https://earthbluerelocation.com';
        console.log('Redirecting to:', destination);

        // Redirect with a 301 status
        res.redirect(301, destination);
    } catch (error) {
        console.error('Error during redirect:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

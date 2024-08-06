const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

// Serve login.html for the /login route
router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'login.html'));
});

// Handle form submission (POST request to /login)
router.post('/', (req, res) => {
    const username = req.body.title;
    // Process the login here, for example:
    console.log(`Username submitted: ${username}`);
    res.redirect('/');  // Redirect to home or another route after login
});

module.exports = router;

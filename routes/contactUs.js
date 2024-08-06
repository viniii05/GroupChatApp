const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

// Serve contactUs.html for the /contactUs route
router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

// Handle form submission (POST request to /contactUs)
router.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    // Process the contact form here
    console.log(`Name: ${name}, Email: ${email}`);
    res.redirect('/success');  // Redirect to the success page
});

module.exports = router;

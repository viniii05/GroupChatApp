const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

// Serve index.html for the home route
router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = router;

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`
        <html>
            <body>
                <form onsubmit="saveUsername(event)">
                    <input id="usernameInput" type="text" placeholder="Enter your username" required>
                    <button type="submit">Login</button>
                </form>
                <script>
                    // Save username to local storage and redirect to the home page
                    function saveUsername(event) {
                        event.preventDefault();
                        const username = document.getElementById('usernameInput').value;
                        localStorage.setItem('username', username);
                        window.location.href = '/';
                    }
                </script>
            </body>
        </html>
    `);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const messages = [];

router.get('/', (req, res, next) => {
    let messageList = '<ul>';
    messages.forEach(msg => {
        messageList += `<li>${msg}</li>`;
    });
    messageList += '</ul>';

    res.send(`
        <html>
            <body>
                <h1>Group Chat</h1>
                ${messageList}
                <form action="/" method="POST">
                    <input id="message" name="message" type="text" placeholder="Enter your message" required>
                    <input type="hidden" name="username" id="username">
                    <button type="submit">Send</button>
                </form>
                <script>
                    // Set the username from local storage into the hidden input field
                    document.getElementById('username').value = localStorage.getItem('username');
                </script>
            </body>
        </html>
    `);
});

router.post('/', (req, res, next) => {
    messages.push(`${req.body.username}: ${req.body.message}`);
    res.redirect('/');
});

module.exports = router;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const loginRouter = require('./routes/login');
const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contactUs');

app.use('/login', loginRouter);
app.use('/contactUs', contactRouter);
app.use('/', indexRouter);

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});

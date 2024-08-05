const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const loginRouter = require('./routes/login');
const IndexRouter = require('./routes/index');

app.use(loginRouter);
app.use(IndexRouter);

// Start the server
app.listen(3000);
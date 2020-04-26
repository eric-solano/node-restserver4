const express = require('express');
const app = express();

app.use(require('./usuario122'));
app.use(require('./login122'));


module.exports = app;
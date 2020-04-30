const express = require('express');
const app = express();

app.use(require('./usuario123'));
app.use(require('./login123'));


module.exports = app;
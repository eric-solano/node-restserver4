const express = require('express');
const app = express();

app.use(require('./usuario121'));
app.use(require('./login121'));


module.exports = app;
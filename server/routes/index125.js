const express = require('express');
const app = express();

app.use(require('./usuario125'));
app.use(require('./login125'));


module.exports = app;
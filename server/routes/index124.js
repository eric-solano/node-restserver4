const express = require('express');
const app = express();

app.use(require('./usuario124'));
app.use(require('./login124'));


module.exports = app;
const express = require('express');
const app = express();

app.use(require('./usuario120'));
app.use(require('./login120'));


module.exports = app;
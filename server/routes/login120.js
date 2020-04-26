const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario120');
const app = express();


app.post('/login', (req, res) => {
    res.json({
        ok:true
    });
});

module.exports = app;
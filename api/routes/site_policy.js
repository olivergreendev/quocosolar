var root = process.cwd();
const express = require('express');
const bodyParser = require('body-parser');
const pageRoutes = require('./routes');
const app = express();

app.set('view engine', 'ejs');

app.use('/', pageRoutes);

app.get('/terms-of-service', (req, res, next) => {
    res.render('terms-of-service');
});

app.get('/privacy-statement', (req, res, next) => {
    res.render('privacy-statement');
});

module.exports = app;
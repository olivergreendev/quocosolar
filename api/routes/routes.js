var root = process.cwd();
const express = require('express');
// const router = express.Router();
// const User = require(root + '/models/user');
// const Booking = require(root + '/models/booking');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/why-now', function (req, res) {
    res.render('why-now');
});

app.get('/consultation', function (req, res) {
    res.render('consultation');
});

// app.get('/events', function (req, res) {
//     res.render('events');
// });

app.get('/information', function (req, res) {
    res.render('information');
});

module.exports = app;
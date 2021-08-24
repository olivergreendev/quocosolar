var root = process.cwd();
const express = require('express');
// const router = express.Router();
const User = require(root + '/models/user');
const Booking = require(root + '/models/booking');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    // res.sendFile(root + '/views/index.ejs');
    res.render('index');
});

app.get('/about', function (req, res) {
    // res.sendFile(root + '/public/html/about.html');
    res.render('about');
});

app.get('/why-now', function (req, res) {
    // res.sendFile(root + '/public/html/why-now.html');
    res.render('why-now');
});

app.get('/consultation', function (req, res) {
    // res.sendFile(root + '/public/html/consultation.html');
    res.render('consultation');
});

app.get('/events', function (req, res) {
    // res.sendFile(root + '/public/html/events.html');
    res.render('events');
});

app.get('/information', function (req, res) {
    // res.sendFile(root + '/public/html/information.html');
    res.render('information');
});

app.get('/terms-of-service', function (req, res) {
    // res.sendFile(root + '/public/html/terms-of-service.html');
    res.render('terms-of-service');
});

app.get('/privacy-statement', function (req, res) {
    // res.sendFile(root + '/public/html/privacy-statement.html');
    res.render('privacy-statement');
});

module.exports = app;
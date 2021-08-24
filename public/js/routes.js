var express = require('express');
var router = express.Router();
var dir = __dirname;

// HTML page routes
router.get('/', function (req, res) {
    res.sendFile(dir + '../index.html');
});

router.get('/about', function (req, res) {
    res.sendFile(dir + '/about.html');
});

router.get('/why-now', function (req, res) {
    res.sendFile(dir + '/why-now.html');
});

router.get('/consultation', function (req, res) {
    res.sendFile(dir + '/consultation.html');
});

router.get('/events', function (req, res) {
    res.sendFile(dir + '/events.html');
});

router.get('/information', function (req, res) {
    res.sendFile(dir + '/information.html');
});

router.get('/404', function (req, res) {
    res.sendFile(dir + '/templates/404.html');
});

router.get('/book', function (req, res) {
    res.sendFile(dir + '/book.html');
});

module.exports = router;
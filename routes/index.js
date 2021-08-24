var express = require('express');
var router = express.Router();
var dir = __dirname;

// GET home page
router.get('/', function(req, res, next) {
    res.sendFile(dir + '/index.html');
});

module.exports = router;
var express = require('express');
var router = express.Router();
// var database = require('../database');

// router.get('/form', function(req, res, next) {
//     res.render('book');
// });

// router.post('/')

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'quocosolar'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected.');
});

connection.query("INSERT INTO users (first_name, last_name, telephone, email) VALUES ('Ashley', 'Green', '1491642220', 'pirmin@live.com')", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});


















// const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'quocosolar'
// });

// router.post('', function(req, res, next) {
//     console.log(req.body.first_name);

//     // connection.connect(function(err) {
//     //     if (err) throw err;
//     //     console.log("Connected.");

//     //     var sql = "INSERT INTO users (first_name, last_name, telephone, email) VALUES ('Ashley', 'Green', '1491642220', 'pirmin@live.com')";
//     // });
// });
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

module.exports = connection;
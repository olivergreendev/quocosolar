const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const mongoose = require('mongoose');
const { database } = require('./config');
const app = express();
// const port = process.env.PORT || 5000;
const User = require('./models/user');
const Booking = require('./models/booking');
const auth = require('./routes/auth');
const moment = require('moment');

var pageRoutes = require('./routes/pages');

var dir = __dirname;

// // Connect to MongoDB
// const dbURI = 'mongodb+srv://dbUser:48161029@cluster0.1lt83.mongodb.net/quocosolar?retryWrites=true&w=majority';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((result) => {
//         // Listen for requests on environment port, or port 5000
//         app.listen(port, () => {
//             console.log(`Server running on port ${port}.`);
//         });
//         console.log('Connected to database.');
//     })
//     .catch((error) => console.log(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/auth', auth);
// app.use('/', pageRoutes);

app.get('/database/users', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/submit-booking', (req, res) => {

    const data = req.body;
    var date = data.date;
    var time = data.time;
    var new_date = new Date(date+' '+time);

    const user = new User({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        telephone: data.telephone
    });
    user.save()
        .then((result) => {
            var user_id = user.id;
            const booking = new Booking({
                user_id: user_id,
                date: new_date,
                start_time: time,
                end_time: time,
                status: 'Pending'
            });
            booking.save()
                   .then((result) => {
                        res.redirect('/book');
                   })
                   .catch((err) => {
                       console.log(err);
                   })
        })
        .catch((err) => {
            console.log(err);
        });
});

// Routes
app.get('/', function (req, res) {
    res.sendFile(dir + '/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(dir + '/about.html');
});

app.get('/why-now', function (req, res) {
    res.sendFile(dir + '/why-now.html');
});

app.get('/consultation', function (req, res) {
    res.sendFile(dir + '/consultation.html');
});

app.get('/events', function (req, res) {
    res.sendFile(dir + '/events.html');
});

app.get('/information', function (req, res) {
    res.sendFile(dir + '/information.html');
});

app.get('/404', function (req, res) {
    res.sendFile(dir + '/templates/404.html');
});

app.get('/book', function (req, res) {
    res.sendFile(dir + '/book.html');
});

app.get('/terms-of-service', function (req, res) {
    res.sendFile(dir + '/terms-of-service.html');
});

app.get('/privacy-statement', function (req, res) {
    res.sendFile(dir + '/privacy-statement.html');
});

app.get('/admin', function (req, res) {
    res.sendFile(dir + '/admin.html');
});

module.exports = app;


// app.get('/book', (req, res) => {

//     Booking
//     .findOne({ user_id: '12345' }, 'date')
//     .exec(function (err, booking) {
//         if (err) throw err;
        
//         var date = booking.date;
//         var utcOffset = date.getTimezoneOffset();

//         date.setMinutes(date.getMinutes() - utcOffset);
//         console.log(date);
//         console.log(booking._id);

//         res.sendFile(dir + '/book.html');
//     });
// })
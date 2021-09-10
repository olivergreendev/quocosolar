var root = process.cwd();
const express = require('express');
const User = require(root + '/models/user');
const Booking = require(root + '/models/booking');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Booking.find()
    .then((bookings) => {
        var bookingDate, date, startTime, status;
        bookings.forEach((booking) => {
            bookingDate = booking.date;
            date = bookingDate.getDate() + '/' + (bookingDate.getMonth() + 1) + '/' + bookingDate.getFullYear();
            startTime = booking.start_time;
            status = booking.status;
        })

        User.findById()
        .then((users) => {


        })
        .catch((error) => {
            if (error) console.log(error);
        })

        res.render('admin', {data: bookings});
        res.end();
    })
    .catch((error) => {
        if (error) console.log(error);
    })

    // Return how many documents there are
    // Booking.countDocuments(function(err, count) {
    //     if (err) console.log(err);
    //     else console.log('Total Documents: ' + count);
    // })
});

app.get('/link2', function (req, res) {
    res.status(200).send("Link  2 is working!");
});

app.get('/link3', function (req, res) {
    res.status(200).json({
        message: "Link3"
    });
});

app.delete('/db/user/delete/:id', function (req, res) {
    User.findByIdAndRemove({ _id: req.params.id }, function (err, user) {
        if (err) { console.log(err); }
        else { console.log('Removed User: ' + user); }
    });
    res.redirect('/admin');
});

app.get('/db/booking/delete/:id', function (req, res) {
    Booking.findByIdAndRemove({ _id: req.params.id }, function (err, booking) {
        if (err) console.log(err);
        else {
            console.log('Removed Booking: ' + booking);
        }
    });
    res.redirect('/admin');
});

// Undefined routes
app.get('*', function (req, res) {
    res.status(200).json({
        message: "Undefined route."
    });
});

module.exports = app;
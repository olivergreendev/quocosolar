var root = process.cwd();
const express = require('express');
// const router = express.Router();
const User = require(root + '/models/user');
const Booking = require(root + '/models/booking');
const moment = require('moment');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('book');
});

app.post('/submit-booking', (req, res, next) => {
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
            first_name: data.first_name,
            last_name: data.last_name,
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

module.exports = app;
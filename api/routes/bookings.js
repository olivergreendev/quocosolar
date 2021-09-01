var root = process.cwd();
const express = require('express');
const User = require(root + '/models/user');
const Booking = require(root + '/models/booking');
const moment = require('moment');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const app = express();
const { check, validationResult } = require('express-validator');
const expressSession = require('express-session');

app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

app.get('/', (req, res, next) => {
    if (!req.url.endsWith('/')) {
        res.redirect('/book'); // res.redirect(301, req.url);
    }
    res.render('book', {success: req.session.success, errors: req.session.errors});
    req.session.errors = null;
    req.session.success = null;
});

app.post('/submit-booking', [
    check('first_name').exists().notEmpty().withMessage('First name is required'),
    check('last_name').exists().notEmpty().withMessage('Last name is required'),
    check('email').exists().notEmpty().withMessage('Email is required').isEmail().normalizeEmail().withMessage('Please enter a valid email address').custom((value, {req}) => {
        return new Promise((resolve, reject) => {
            User.findOne({email: value}, function(err, user) {
                if (err) reject(new Error('Server Error'))
                if (Boolean(user)) reject(new Error('Email already in use'))
                resolve(true)
            });
        });
    }),
    check('telephone').exists().notEmpty().withMessage('Telephone is required').matches(/^[0-9]*$/).withMessage('Please enter a valid telephone number').isLength({min: 11, max: 11}).withMessage('Please enter a valid telephone number'),
    check('date').exists().notEmpty().withMessage('Please select a date for your consultation').isDate(['DD/MM/YYYY']).withMessage('Please enter a valid date'),
    check('time').exists().notEmpty().withMessage('Please select a time for your consultation'),
    check('q1').exists().equals('q1_yes').withMessage('Please agree to question 1'),
    check('q2').exists().equals('q2_yes').withMessage('Please agree to question 2')

], (req, res, next) => {
    
    var data = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const alert = errors.array();

        req.session.errors = errors;
        req.session.success = false;
        // return res.status(422).jsonp(errors.array());
    } else {
        req.session.success = true;
    }

    res.redirect('/book');

    // else {
    //     var new_date = new Date(data.date+' '+data.time);

    //     const user = new User({
    //         first_name: data.first_name,
    //         last_name: data.last_name,
    //         email: data.email,
    //         telephone: data.telephone
    //     });
    
    //     user.save()
    //     .then((result) => {
    //         const booking = new Booking({
    //             user_id: user.id,
    //             first_name: data.first_name,
    //             last_name: data.last_name,
    //             email: data.email,
    //             telephone: data.telephone,
    //             date: new_date,
    //             start_time: data.time,
    //             end_time: data.time, // (+30 mins)
    //             status: 'Pending'
    //         });
    //         booking.save()
    //         .then((result) => {
    //             res.redirect('/book');
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             User.findByIdAndRemove({ _id: user.id }, function (err, booking) {
    //                 if (err) console.log('Error removing user.\n' + err);
    //                 else {
    //                     console.log('Removed Booking: ' + booking);
    //                 }
    //             });
    //             res.redirect('/book');
    //         })
    //     })
    //     .catch((err) => {
    //         console.log('Error saving user. Error code: ' + err.code + '\n' + err);
    
    //         if (err.code === 11000) {
    //             console.log('Display the error prompt for a duplicate email.');
    //             // Show the error prompt label
    //         }
    //     });
    // }
});

app.get('/submit-booking', (req, res, next) => {
    // res.status(200).json({
    //     message: 'Thank you for your booking. Please check your email to verify your booking and secure your slot.'
    // });
    res.send('Thanks for your booking.');
    res.end();
});

app.get('*', (req, res, next) => {
    res.redirect('/book');
    res.end();
});

module.exports = app;
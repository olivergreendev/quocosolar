const mongoose = require('mongoose');
const express = require('express');
const app = express();
const pageRoutes = require('./api/routes/routes');
const bookingRoutes = require('./api/routes/bookings');
const adminRoutes = require('./api/routes/admin');
const port = process.env.PORT || 5000;

const dbURI = 'mongodb+srv://dbUser:48161029@cluster0.1lt83.mongodb.net/quocosolar?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}.`);
        });
        console.log('Connected to database.');
    })
    .catch((error) => console.log(error));

module.exports = app;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', pageRoutes);
app.use('/book', bookingRoutes);
app.use('/admin', adminRoutes);

// Get Users
app.get('/database/users', (req, res) => {
    User.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});
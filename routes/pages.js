const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

module.exports = router;
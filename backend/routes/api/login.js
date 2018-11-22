const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get facebook login
router.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
})
// add user

// delete user

// mongodb user collection connection

module.exports = router;
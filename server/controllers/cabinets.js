const connection = require('../models/db');
const verifyToken = require('../models/user');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

// Get protected Data require token verification
router.get('/cabinets', verifyToken, (req, res) => {
    connection.query('SELECT * from cabinet', function (err, cabinets) {
        // connection.end();
        if (err) {
            console.log('Error while performing Query.');
        } else {
            res.json(cabinets);
        }
    });
});

module.exports = router;
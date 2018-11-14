const connection = require('../models/db');
const verifyToken = require('../models/user');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

// Get protected Data require token verification
router.get('/praticiens', verifyToken, (req, res) => {
    connection.query('SELECT * from praticien', function (err, praticiens) {
        // connection.end();
        if (err) {
            console.log('Error while performing Query: ', err);
        } else {
            res.json(praticiens);
        }
    });
});

module.exports = router;
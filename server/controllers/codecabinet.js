const connection = require('../models/db');
const verifyToken = require('../models/user');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

// Get protected Data require token verification
router.get('/codecabinet', verifyToken, (req, res) => {
    connection.query(`SELECT code_cabinet from cabinet`, function (err, codecabinets){
        if (err) {
            console.log('Error while requesting codes of cabinets: ', err);
        }
        else {
            res.json(codecabinets);
        }
    })
});

module.exports = router;
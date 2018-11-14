const connection = require('../models/db');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

// Database crypted password against plaintext input password
// Crypto configuration
const crypto = require('crypto');
const algorithm = 'aes256';
const password = 'l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3';
// Login App
router.post('/login', (req, res) => {
    let userData = req.body;
    connection.query(`SELECT password FROM users WHERE username = "${userData.username}"`, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send('Invalid Username');
            } else {
                let decipher = crypto.createDecipher(algorithm,password);
                let dec = decipher.update(user[0].password,'hex','utf8');
                dec += decipher.final('utf8');

                if (dec !== userData.password) {
                    res.status(401).send('Invalid Password');
                } else {
                    // Json Web Token Creation
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, secretKey);
                    res.status(200).send({ token });
                }
            }
        }
    })
});

// Json Web Token
// Jwt configuration
const jwt = require('jsonwebtoken');
const secretKey = 'l5JmPG01zB%r8';
// VerifyToken App
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, secretKey);
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

module.exports = router;

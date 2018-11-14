const connection = require('../models/db');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

router.post('/creerpraticien', (req, res) => {
    let userData = req.body;
    console.log("envoi des données: ", userData);
    //envoi des données dans la table praticien
    connection.query(`INSERT INTO praticien (nom_praticien, 
        prenom_praticien, 
        sexe, 
        diplome, 
        specialite, 
        description_praticien, 
        titre,
        photo_praticien) VALUES (
    "${userData[0]}",
    "${userData[1]}", 
    "${userData[2]}", 
    "${userData[3]}", 
    "${userData[4]}", 
    "${userData[5]}", 
    "${userData[6]}",
    "${userData[7]}")`, (err, praticiens) => {
        // connection.end();
        if (err) {
            console.log('Error while performing Query: ', err);
        } else {
            res.json(praticiens);
        }
    });
});

module.exports = router;
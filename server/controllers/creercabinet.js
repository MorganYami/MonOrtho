const connection = require('../models/db');
const verifyToken = require('../models/user');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());


router.post('/creercabinet', verifyToken, (req, res) => {
    let userData = req.body;
    let id_lastcabinet;
    let id_lastcontact;
    console.log("envoi des données: ", userData);
    //envoi dans la table cabinet
    connection.query(`INSERT INTO cabinet (nom_cabinet, 
            code_cabinet, 
            horaire_cabinet, 
            description_cabinet, 
            logo, 
            photo_cabinet) VALUES (
                "${userData[0]}", 
                "${userData[1]}", 
                "${userData[2]}", 
                "${userData[3]}", 
                "${userData[4]}", 
                "${userData[5]}")`, (err, cabinets) => {
            if (err) {
                console.log('Error while performing Query for cabinet: ', err);
            }
        });

    //envoi dans la table contact
    connection.query(`INSERT INTO contact (adresse, 
                code_postal, 
                ville, 
                telephone_professionnel, 
                mail, 
                site_web) VALUES (
                    "${userData[6]}",
                    "${userData[7]}",
                    "${userData[8]}",
                    "${userData[9]}",
                    "${userData[10]}",
                    "${userData[11]}")`, function (error, contact) {
            if (error) {
                console.log('Error while performing Query for contat: ', error)
            }
        });
        
    //lien cabinet - contact
    connection.query(`SELECT id_cabinet FROM cabinet WHERE code_cabinet = "${userData[1]}"`, function (error, cabinet) {
        if (error) {
            console.log('Error while selecting id_cabinet', error);
        }
        else {
            id_lastcabinet = cabinet[0].id_cabinet;
            connection.query(`SELECT id_contact FROM contact ORDER BY id_contact DESC LIMIT 1`, function (error, contact) {
                if (error) {
                    console.log('Error while selecting id_cabinet', error);
                }
                else {
                    id_lastcontact = contact[0].id_contact;
                    connection.query(`INSERT INTO jonction_cabinet_contact (fk_id_cabinet, fk_id_contact) 
                                    VALUES ("${id_lastcabinet}", "${id_lastcontact}")`, function (error, jonction_cabinet_contact) {
                            if (error) {
                                console.log('Error while performing jonction cabinet-contact', error);
                            }
                        });
                }

            });
        }

    });

    //lien cabinet - praticien(s)
    connection.query(`SELECT id_cabinet FROM cabinet WHERE code_cabinet = "${userData[1]}"`, function (error, cabinet) {
        if (error) {
            console.log('Error while selecting id_cabinet', error);
        }
        else {
            id_lastcabinet = cabinet[0].id_cabinet;
            let varLoc = userData[12];
            for (let i = 0; i < varLoc.length; i++) {
                let varId = varLoc[i].id_praticien;  
                connection.query(`INSERT INTO jonction_cabinet_praticien (fk_id_cabinet, fk_id_praticien) 
                                    VALUES ("${id_lastcabinet}", "${varId}")`, function (error, jonction_cabinet_praticien) {
                            if (error) {
                                console.log('Error while performing jonction cabinet-praticien', error);
                            }
                        });
            }
        }
    });
    res.json("ok");
});




module.exports = router;
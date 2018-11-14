const connection = require('../models/db');
const verifyToken = require('../models/user');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

// Get protected Data require token verification
router.post('/cabinet', verifyToken, (req, res) => {
    let userData = req.body;
    let selectcabinet = [];
    connection.query(`SELECT cabinet.*, contact.* FROM cabinet
    INNER JOIN jonction_cabinet_contact ON jonction_cabinet_contact.fk_id_cabinet = cabinet.id_cabinet 
    INNER JOIN contact ON jonction_cabinet_contact.fk_id_contact = contact.id_contact
    WHERE cabinet.code_cabinet = "${userData.codeCabinet}"`, function (err, cabinet) {
            // connection.end();
            if (err) {
                console.log('Error while performing Query.');
            } else {
                //recuperation des infos du cabinet
                selectcabinet[0] = cabinet[0];
                connection.query(`SELECT praticien.*
            FROM cabinet
            INNER JOIN jonction_cabinet_praticien ON jonction_cabinet_praticien.fk_id_cabinet = cabinet.id_cabinet 
            INNER JOIN praticien ON jonction_cabinet_praticien.fk_id_praticien = praticien.id_praticien
            WHERE cabinet.code_cabinet = "${userData.codeCabinet}"`, function (err, praticien) {
                        if (err) {
                            console.log('Error while performing Query.');
                        }
                        else {
                            //récuperation des info des praticiens lié au cabinet
                            let lp = praticien.length;
                            for (let i = 0; i < lp; i++) {
                                let j = i+1;
                                selectcabinet[j] = praticien[i];
                            }
                            res.json(selectcabinet);
                        }
                    });
            }
        });
});

module.exports = router;
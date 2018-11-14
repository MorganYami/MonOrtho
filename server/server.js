const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:4200'}));

const user = require('./models/user');
const cabinet = require('./controllers/cabinet');
const cabinets = require('./controllers/cabinets');
const praticiens = require('./controllers/praticiens');
const creerpraticien = require('./controllers/creerpraticien');
const creercabinet = require('./controllers/creercabinet');
const codecabinet = require('./controllers/codecabinet');

app.use(express.static(__dirname));
app.use('/user', user);
app.use('/cabinets', cabinets);
app.use('/cabinet', cabinet);
app.use('/praticiens', praticiens);
app.use('/creerpraticien', creerpraticien);
app.use('/creercabinet', creercabinet);
app.use('/codecabinet', codecabinet);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});

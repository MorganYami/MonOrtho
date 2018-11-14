// Database MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'pangot',
    database : 'admin-orthalis',
    multipleStatements: true
});
// const connection = mysql.createConnection({
//     host     : '',
//     user     : 'demo',
//     password : 'pangot',
//     database : 'nsdent',
//     multipleStatements: true
// });
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ...");   
    } else {
        console.log("Database error ...");
    }
});

module.exports = connection;
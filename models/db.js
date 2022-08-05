const mysql = require('mysql');

const {} = require('../config/db.config');

const connection  = mysql.createConnection({
    host:HOST,
    user:USER,
    database: db
})

connection.query(
    'select * from users',
    function (err,result){
        console.log(result)
    }
)
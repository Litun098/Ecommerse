const mysql = require('mysql');

const {HOST,USER,DB} = require('../config/db.config');

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

connection.query(
    'insert into users(name,age ,role,email) values(?,?,?,?)',

)
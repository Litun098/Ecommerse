const mysql = require('mysql');

const {HOST,USER,DB,PASSWORD} = require('../config/db.config');

const connection  = mysql.createConnection({
    host:HOST,
    user:USER,
    database: DB,
    password:PASSWORD
})

connection.query(
    'select * from users',
    function (err,result){
        console.log(result)
    }
)

// const userInsertquery ='insert into users(name,age ,role,email,createdAt,updatedAt) values(?,?,?,?,?,?)'

// const userInsertData =['Ankit',23,'Developer','ankit@gmail.com','2020-04-03 06:10:15','2022-08-03 06:10:15'];

// connection.query(
//     userInsertquery,
//     userInsertData,
//     function(err,data){
//         if(err){
//             console.log(err);
//         }
//         console.log(data)
//     }

// )
const express = require('express');
const {sequelize,Catagories} = require('./models');
require('dotenv').config();
const {serverPort} = require('./config/config.server');
const app = express();

app.get('/', async (req,res)=>{
    res.send("Hello world")
})


app.listen(serverPort, async ()=>{
    // await Catagories.sync({force:true})
    await sequelize.authenticate();
    console.log('Ecommerse is running...')
})
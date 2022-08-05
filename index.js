const express = require('express')
require('dotenv').config();
const {serverPort} = require('./config/config.server');
const app = express();

app.get('/', async (req,res)=>{
    res.send("Hello world")
})


app.listen(serverPort, async ()=>{
    console.log('Ecommerse is running...')
})
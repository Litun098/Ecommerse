const express = require('express');

require('dotenv').config();
const {routes,authRoutes, cartRoutes} = require('./routes');



const app = express();
app.use(express.json())
app.use(authRoutes);
app.use(routes);
app.use(cartRoutes)

module.exports ={
    app
}
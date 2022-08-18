const express = require('express')
const {updateCart,getCart} = require('../controller/cart')
const {verifyToken} = require('../middleware')
const routes = express.Router()



routes.get('/ecomm/api/v1/cart/:id',verifyToken,getCart)
routes.put('/ecomm/api/v1/cart/:id',verifyToken,updateCart)

module.exports ={ 
    cartRoutes:routes
}
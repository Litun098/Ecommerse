const express = require('express')
const {updateCart,getCart} = require('../controller/cart')
const routes = express.Router()



routes.get('/ecomm/api/v1/cart/:id',getCart)
routes.put('/ecomm/api/v1/cart/:id',updateCart)

module.exports ={ 
    cartRoutes:routes
}
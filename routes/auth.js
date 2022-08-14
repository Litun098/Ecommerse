const express = require('express')

const routes = express.Router()
const {signup} = require('../controller/auth')

routes.post('/ecomm/api/v1/auth/signup',signup)

module.exports = {authRoutes:routes}
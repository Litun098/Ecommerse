const express = require('express')

const routes = express.Router()
const {signup} = require('../controller/auth')
const {checkduplicateUsernameAndEmail,checkRoles} = require('../middleware/user')

routes.post('/ecomm/api/v1/auth/signup',checkduplicateUsernameAndEmail,checkRoles,signup)

module.exports = {authRoutes:routes}
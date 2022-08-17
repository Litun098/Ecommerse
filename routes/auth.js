const express = require('express')

const routes = express.Router()
const {
    signup,
    signin} = require('../controller/auth')


const {
    checkduplicateUsernameAndEmail,
    checkRoles,
} = require('../middleware/user')

routes.post('/ecomm/api/v1/auth/signup',[checkduplicateUsernameAndEmail],checkRoles,signup)

routes.post('/ecomm/api/v1/auth/signin',signin)

module.exports = {authRoutes:routes}
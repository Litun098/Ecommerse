const {checkNameForCatagory} = require('./catagory')
const {validateProduct} = require('./product')
const {checkduplicateUsernameAndEmail,checkRoles} = require('./user')
const {verifyToken,isAdmin} = require('./authJwt')

module.exports = {
    validateProduct,
    checkNameForCatagory,
    checkduplicateUsernameAndEmail,
    checkRoles,
    verifyToken,
    isAdmin
}
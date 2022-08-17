const {checkNameForCatagory} = require('./catagory')
const {validateProduct} = require('./product')
const {checkduplicateUsernameAndEmail,checkRoles,verifyToken} = require('./user')
module.exports = {
    validateProduct,
    checkNameForCatagory,
    checkduplicateUsernameAndEmail,
    checkRoles,
    verifyToken
}
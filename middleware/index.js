const {checkNameForCatagory} = require('./catagory')
const {validateProduct} = require('./product')
const {checkduplicateUsernameAndEmail} = require('./user')
module.exports = {
    validateProduct,
    checkNameForCatagory,
    checkduplicateUsernameAndEmail
}
const express = require('express')
const {
    createCategory, 
    getAllCategory,
    getCategoryOnId, 
    updateCategory, 
    deleteCategory 
} = require('../controller/catagory')


const {
	createProduct,
	getAllProduct,
	getProductOnId,
	updateProduct,
	deleteProduct
} = require('../controller/product')

const routes = express.Router()


routes.post('/ecomm/api/v1/categories', createCategory)
routes.get('/ecomm/api/v1/categories', getAllCategory)
routes.get('/ecomm/api/v1/categories/:id', getCategoryOnId)
routes.put('/ecomm/api/v1/categories/:id', updateCategory)
routes.delete('/ecomm/api/v1/categories/:id', deleteCategory)



routes.post('/ecomm/api/v1/product', createProduct)
routes.get('/ecomm/api/v1/product', getAllProduct)
routes.get('/ecomm/api/v1/product/:id', getProductOnId)
routes.put('/ecomm/api/v1/product/:id', updateProduct)
routes.delete('/ecomm/api/v1/product/:id', deleteProduct)


module.exports = routes
const express = require('express')
const {checkNameForCatagory,validateProduct} = require('../middleware')
const {authRoutes} = require('./auth');
const {
    createCategory, 
    getAllCategory,
    getCategoryOnId, 
    updateCategory, 
    deleteCategory,
} = require('../controller/catagory')


const {
	createProduct,
	getAllProduct,
	getProductOnId,
	updateProduct,
	deleteProduct,
    filteredProduct
} = require('../controller/product')

const routes = express.Router()


routes.post('/ecomm/api/v1/categories',checkNameForCatagory, createCategory)
routes.get('/ecomm/api/v1/categories', getAllCategory)
routes.get('/ecomm/api/v1/categories/:id', getCategoryOnId)
routes.put('/ecomm/api/v1/categories/:id', updateCategory)
routes.delete('/ecomm/api/v1/categories/:id', deleteCategory)



routes.post('/ecomm/api/v1/product',[validateProduct],createProduct)
routes.get('/ecomm/api/v1/product', getAllProduct)
routes.get('/ecomm/api/v1/product/filter', filteredProduct)
routes.get('/ecomm/api/v1/product/:id', getProductOnId)
routes.put('/ecomm/api/v1/product/:id', updateProduct)
routes.delete('/ecomm/api/v1/product/:id', deleteProduct)


module.exports ={ 
    routes,
    authRoutes
}
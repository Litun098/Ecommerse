const express = require('express')
const {
    checkNameForCatagory,
    validateProduct,
    verifyToken,
    isAdmin
} = require('../middleware')

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


routes.post('/ecomm/api/v1/categories',checkNameForCatagory,verifyToken,isAdmin, createCategory)
routes.get('/ecomm/api/v1/categories',verifyToken,getAllCategory)
routes.get('/ecomm/api/v1/categories/:id',verifyToken, getCategoryOnId)
routes.put('/ecomm/api/v1/categories/:id',verifyToken,isAdmin, updateCategory)
routes.delete('/ecomm/api/v1/categories/:id',verifyToken,isAdmin, deleteCategory)



routes.post('/ecomm/api/v1/product',[validateProduct],verifyToken,isAdmin,createProduct)
routes.get('/ecomm/api/v1/product', getAllProduct)
routes.get('/ecomm/api/v1/product/filter', filteredProduct)
routes.get('/ecomm/api/v1/product/:id', getProductOnId)
routes.put('/ecomm/api/v1/product/:id',verifyToken,isAdmin, updateProduct)
routes.delete('/ecomm/api/v1/product/:id',verifyToken,isAdmin, deleteProduct)


module.exports ={ 
    routes,
    authRoutes
}
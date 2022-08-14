const express = require('express');
const { sequelize, Catagories,Products,User,Role } = require('./models');
require('dotenv').config();
const { serverPort } = require('./config/config.server');
const routes = require('./routes');



const app = express();
app.use(express.json())
app.use(routes)


app.listen(serverPort, async () => {
    console.log('Ecommerse is running at ' + serverPort)

    
    // To sync all models
    // await sequelize.sync({force:true});


    // To sync model wise
    // await Catagories.sync({force:true});
    // await Products.sync({force:true});

    // await User.sync({force:true});
    // await Role.sync({force:true});
    
    await sequelize.authenticate();
    // await init()
})

// async function init(){
// 	try{
// 		await sequelize.sync({force:true})

// 		const defaultProducts = [
// 		{
// 		    "description":"Nyka best products",
// 		    "name" :"MakeUP Kit",
// 		    "cost": 870,
// 		    "quantity": 20,
// 			"CatagoryId": 1
// 		},
// 		{
//     		"description":"Best fragnance",
// 		    "name" :"Fogg",
// 		    "cost": 280,
// 		    "quantity": 20,
// 			"CatagoryId": 2
// 		},
// 		{
//     		"description":"Best for summer holidays",
// 		    "name" :"Summer Clothes",
// 		    "cost": 1200,
// 		    "quantity": 20,
// 			"CatagoryId": 3
// 		}
// ]

// 		const defaultCategories = [
// 		{
// 			name : 'Beauty',
// 			description: 'All beauty Products'
// 		},
// 		{
// 			name: 'Fragnance',
// 			description: 'All Fragnance Products'
// 		},
// 		{
// 			name: 'Clothes',
// 			description: 'All types of Clothes'
// 		}
// 		]
// 		await Catagories.bulkCreate(defaultCategories)
// 		await Products.bulkCreate(defaultProducts)
// 	}
// 	catch(err){
// 		console.log(err)
// 	}
// }
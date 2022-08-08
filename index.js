const express = require('express');
const { sequelize, Catagories } = require('./models');
require('dotenv').config();
const { serverPort } = require('./config/config.server');
const routes = require('./routes');



const app = express();
app.use(express.json())
app.use(routes)


app.listen(serverPort, async () => {
    // To sync model wise
    // await Catagories.sync({force:true});

    // To sync all models
    // await sequelize.sync({force:true});

    await sequelize.authenticate();
    // await init()
    console.log('Ecommerse is running at ' + serverPort)
})

// async function init() {
//     try {
//         await Catagories.sync({ force: true })

//         const defaultCatagories = [{
//             name: "Mobile",
//             description: 'About Mobiles'
//         }, {
//             name: "Washing Machine",
//             description: "About Washing machine"
//         }]

//         const result = await Catagories.bulkCreate(defaultCatagories);
//         console.log(result)
//     } catch (err) {
//         console.log(err);
//     }
// }
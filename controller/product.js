const { Products, Sequelize } = require('../models')

async function createProduct(req, res){
    const data = req.body;

    const name = data.name;
    const cost = data.cost;
    const description = data.description;
    const quantity = data.quantity;
	const CatagoryId = data.CatagoryId;

    try{
        const result = await Products.create({name,cost,description,quantity,CatagoryId});

        res.status(200).send({
            msg:"Product added successfully.",
            result:result
        })
        return result;
    }catch(err){
        console.log(err)
        res.status(500).send({msg:"Couldn't created the product"})
    }
}

async function getAllProduct(req, res){
	try{
		const result = await Products.findAll()
		res.send(result)
	}catch(err){
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function getProductOnId(req,res){
	const categoryId = req.params.id;

	try{
		const result = await Products.findOne({
			where : {
				id : categoryId
			}
		})

		res.send(result)
	}catch(err){
		console.log('err in getting categories based on ID', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function updateProduct(req,res){
	const categoryId = req.params.id;
	
	try{
		const result = await Products.findOne({
			where : {
				id : categoryId,
			}
		})
		 if(result){
			result.name = req.body.name;
			result.description = req.body.description;
			result.cost = req.body.cost;
			result.quantity = req.body.quantity;

			result.save()

			res.send({msg : 'Product got update', 
			updatedCategory: result})
		 }else {
			console.log('err in getting categories', err)
			res.status(400).send({msg : 'category id does not exist'})
		 }
	}catch(err){
		console.log('err in getting categories', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function deleteProduct(req,res){
	const categoryId = req.params.id;
	try{
		const result = await Products.destroy({
			where :{
				id: categoryId
			}
		})

		res.send({msg: 'catrgory deleted', result})
	}catch(err){
		console.log('err in deleting categories', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function filteredProduct(req,res){
	const CatagoryId = req.query.CatagoryId;
	const name = req.query.name;
	const minCost = req.query.minCost;
	const maxCost = req.query.maxCost;

	if(CatagoryId){
		const result = await Products.findAll({
			where:{
				CatagoryId:CatagoryId
			}
		})
		res.status(200).send(result);
	}


	if(name){
		const result = await Products.findAll({
			where:{
				name:name
			}
		})
		res.status(200).send(result);
	}

	
	if(minCost && maxCost){
		const result = await Products.findAll({
			where:{
				cost:{
					[Sequelize.Op.gte]:minCost,
					[Sequelize.Op.lte]:maxCost
				}
			}
		})
		res.status(200).send(result)
	}
	else if(minCost){
		const result = await Products.findAll({
			where:{
				cost:{
					[Sequelize.Op.gte] : minCost
				}
			}
		})
		res.status(200).send(result);
	}
	else if(maxCost){
		const result = await Products.findAll({
			where:{
				cost:{
					[Sequelize.Op.lte] : maxCost
				}
			}
		})
		res.status(200).send(result);
	}
	else{
		const result = await Products.findAll()
		res.send(result);
	}
}

module.exports = {
	createProduct,
	getAllProduct,
	getProductOnId,
	updateProduct,
	deleteProduct,
	filteredProduct
}
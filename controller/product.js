const { Products } = require('../models')

async function createProduct(req, res){
    const data = req.body;

    if(!(data.name)){
        res.status(400).send({mag:'Name is required'});
    }
    const name = data.name;
    if(!(data.cost)){
        res.status(400).send({msg:"Cost is required"});
    }
    const cost = data.cost;
    
    if(!(data.description)){
        res.status(400).send({msg:"Cost is required"});
    }
    const description = data.description;
    if(!(data.quantity)){
        res.status(400).send({msg:"Quantity is required."});
    }
    const quantity = data.quantity;

    try{
        const result = await Products.create({name,cost,description,quantity});

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

module.exports = {
	createProduct,
	getAllProduct,
	getProductOnId,
	updateProduct,
	deleteProduct
}
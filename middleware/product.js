const {Catagories} = require('../models')

async function validateProduct(req, res, next) {
    const productData = req.body;

    if (!productData.name) {
        res.status(404).send({ msg: "name is missing in data." });
        return;
    }

    if (productData.CatagoryId) {
        try {
            const result = await Catagories.findByPk(productData.CatagoryId);
            if(result) {
                next();
            }else{
                res.status(404).send({ msg:"Catagories id does not exist in catagory"})
            }
        } catch (err) {
            res.status(500).send({ msg:"internal server error"})
            return;
        }
        
    } else {
        res.status(404).send({ mag: "Catagories id is missing in product data" });
        return;
    }
}

module.exports = {
    validateProduct
}
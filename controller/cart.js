const { Cart, Products } = require('../models')

async function updateCart(req, res) {
    const cartId = req.params.id;
    try {
        const cart = await Cart.findByPk(cartId)
        if (cart) {
            const productIds = req.body.productIds;

            const products = await Products.findAll({
                where: {
                    id: productIds
                }
            });

            if (products.length > 0) {
                await cart.setProducts(products);

                const cartProducts = await cart.getProducts()

                let totalCost = 0;
                let addedProducts = []

                for (let i = 0; i < cartProducts.length; i++) {
                    totalCost = totalCost + cartProducts[i].dataValues.cost;

                    addedProducts.push({
                        id: cartProducts[i].dataValues.id,
                        name: cartProducts[i].dataValues.name,
                        cost: cartProducts[i].dataValues.cost,
                        description: cartProducts[i].dataValues.description
                    })
                }

                res.send({ totalCost, addedProducts });
            } else {
                res.status(400).send({ msg: "Product does not exist" });
                return;
            }
        } else {
            res.status.send({ msg: "Cart does not exists." })
            return;
        }
    } catch (err) {
        res.status(500).send({ msg: "Internal server error." });
        return;
    }
}

async function getCart(req, res) {
    const cartId = req.params.id;
    try {
        const cart = await Cart.findByPk(cartId)
        if (cart) {

            const cartProducts = await cart.getProducts()

            let totalCost = 0;
            let addedProducts = []

            for (let i = 0; i < cartProducts.length; i++) {
                totalCost = totalCost + cartProducts[i].dataValues.cost;

                addedProducts.push({
                    id: cartProducts[i].dataValues.id,
                    name: cartProducts[i].dataValues.name,
                    cost: cartProducts[i].dataValues.cost,
                    description: cartProducts[i].dataValues.description
                })
            }

            res.send({ totalCost, addedProducts });

        } else {
            res.status.send({ msg: "Cart does not exists." })
            return;
        }
    } catch (err) {
        res.status(500).send({ msg: "Internal server error." });
        return;
    }
}

module.exports = {
    updateCart,
    getCart
}
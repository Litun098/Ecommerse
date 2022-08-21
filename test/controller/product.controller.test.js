const { createProduct, getAllProduct } = require('../../controller/product')
const { Products } = require('../../models')
const { mockRequest, mockResponse } = require('../interceptor');



describe('Product controller terting', () => {

    let req, res;

    beforeEach(() => {
        req = mockRequest();
        res = mockResponse();
    })
    it('test create product controller', async () => {
        const testPayLoad = {
            name: "Sony TV",
            description: "About TV",
            cost: 234,
            quantity: 12,
            CatagoryId: 1
        }
        req.body = testPayLoad;

        const createProductSpy = jest.spyOn(Products, 'create').mockImplementation((testPayLoad) => Promise.resolve(testPayLoad));

        await createProduct(req, res)
        expect(createProductSpy).toHaveBeenCalled();
        expect(Products.create).toHaveBeenCalledWith(testPayLoad);
        expect(res.status).toHaveBeenCalledWith(200)

        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith({
            "msg": "Product added successfully.",
            "result": {
                name: "Sony TV",
                description: "About TV",
                cost: 234,
                quantity: 12,
                CatagoryId: 1
            }
        })
    })

    it('testing success find all product', async () => {
        const spy = jest.spyOn(Products, 'findAll')
            .mockImplementation(() => {
                return Promise.resolve([{
                    name: "Sony TV",
                    description: "About TV",
                    cost: 234,
                    quantity: 12,
                    CatagoryId: 1
                }])
            })

        await getAllProduct(req, res);

        expect(res.send).toHaveBeenCalledWith([{
            name: "Sony TV",
            description: "About TV",
            cost: 234,
            quantity: 12,
            CatagoryId: 1
        }])
        
        expect(spy).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200)
    })
})
const {app} = require('../../app')
const request = require('supertest');


test('get all product api',async ()=>{
    const  API_END_POINT = '/ecomm/api/v1/product';

    const res = await request(app).get(API_END_POINT);
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    
})
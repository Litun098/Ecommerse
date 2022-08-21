module.exports = {
    mockRequest:()=>{
        const request = {}
        request.body = jest.fn().mockReturnValue(request);
        request.params = jest.fn().mockReturnValue(request); 
    },
    mockResponse:()=>{
        const response = {}
        response.send = jest.fn().mockReturnValue(response)
        res.status = jest.fn().mockReturnValue(response)
        res.json = jest.fn().mockReturnValue(response)
    }
}
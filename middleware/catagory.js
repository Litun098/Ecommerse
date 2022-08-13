async function checkNameForCatagory(req,res,next){
    const catagoryData = req.body;

    if(!catagoryData.name){
        res.status(400).send({msg:"name is mandatory"})
        return;
    }
    next();
}

module.exports = {
    checkNameForCatagory
}
const bcrypt = require('bcrypt');
const {User} = require('../models');
async function signup(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);

    console.log(password)

    try{
        const user = await User.create({
            username,
            email,
            password
        })

        if(req.body.roles){
            const roles = req.body.roles;
            const result = await user.setRoles( roles);
            console.log("User defined role: ",result)
        }else{
            const result = await user.setRoles([1]);
            console.log("Default role: ",result)
        }

        res.status(200).send({msg:"User has been created successfully."});
    }catch(err){
        res.status(500).send({msg:"Internal server error."});
        console.log(err)
    }

}

module.exports = {
    signup
}
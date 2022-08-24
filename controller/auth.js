const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User,Cart} = require('../models');


async function signup(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);

    if(!username){
        res.status(400).send({ msg:"user name required."})
        return;
    }
    if(!email){
        res.status(400).send({ msg:"email required."})
        return;
    }
    if(!password){
        res.status(400).send({ msg:"password required."})
        return;
    }


    try{

        const user = await User.create({
            username,
            email,
            password
        })
        await Cart.create({id:user.id})
        if(req.body.role){
            const role = req.body.role;
            const result = await user.setRoles(role);
            res.send({msg:"User defined role",result})
            console.log("User defined role: ",result)
        }
        else{
            const result = await user.setRoles([1]);
            res.send({msg:"Default role",result})
            // console.log("Default role: ",result)
        }

        res.status(200).send({msg:"User has been created successfully."});
    }catch(err){
        res.status(500).send({msg:"Internal server error."});
        console.log(err)
    }

}

async function signin(req,res){
    const username = req.body.username;
    const password = req.body.password;

    try{
        const user = await User.findOne({
            where:{
                username:username
            }
        })

        if(user){
            const validatePassword = bcrypt.compareSync(password,user.password)
            if(!validatePassword){
                res.status(400).send({msg:"Username or password incorrect"});
            } 
            const token = jwt.sign({ id: user.id },'secret-key', {
                expiresIn: '24h'
            })
            const authorities = [];
            const role = await user.getRoles();

            for(let i = 0;i<role.length;i++){
                authorities.push(role[i].name);
            }

            const finalUser = {
                id:user.id,
                name:user.name,
                email:user.email,
                username:user.username,
                token:token,
                authorities:authorities
            }

            res.send(finalUser);
        }else{
            res.status(400).send({msg:'username or password is incorrect'})
        }
    }catch(err){
        res.status(500).send({msg:'internal server error'})
        console.log(err)
    }
}

module.exports = {
    signup,
    signin
}
const {User} = require('../models')

async function checkduplicateUsernameAndEmail(req, res,next){
    if(req.body.username){
        const user = await User.findOne({
            where: {
                username:req.body.username
            }
        })

        if(user){
            res.status(400).send({msg:"User name already exists"})
            return;
        }
    }
    if(req.body.email){
        const email = await User.findOne({
            where: {
                email:req.body.email
            }
        })

        if(email){
            res.status(400).send({msg:"email already exists"})
            return;
        }
    }
    
    next();
}

// async function checkRoles(req,res,next){
//     if(req.body.role){
//         const roles = req.body.role;
//         let flag = true;
//         const availRoles = await roles.findAll();
//         for(let i = 0;i<availRoles.length;i++){
//             for(let j = 0;j<roles.length;j++){
//                 if(roles[j]!== availRoles[i].dataValues.id){
//                     flag = false;
//                 }
//             }
//         }
//         if(flag){
//             next();
//         }else{
//             res.status(400).send({msg:"Role is does not exists."})
//             return;
//         }
//     }    
// }
module.exports = {
    checkduplicateUsernameAndEmail,
    // checkRoles
}
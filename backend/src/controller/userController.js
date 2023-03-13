const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')


const createUser=async function(req,res){

    try{
        
    let data=await userModel.create(req.body)
    if(data){
       return res.status(201).send({msg:"registration successfully done"})
    }
    }
    catch(err){
       return res.status(500).send({msg:err.message})
    }
}

const updateUser=async function(req,res){
    
    try{
        const {email}=req.body
        let update=await userModel.findOneAndUpdate({email:email},{$set:req.body},{new:true})
        if(update){
          return res.status(201).send({msg:"successfully upadated"})
        }
    }
    catch(err){
       return res.status(500).send({msg:err.message})
    }
}


const login=async function(req,res){
    const user=await userModel.findOne({email:req.body.email})

    if(user){
        const token=jwt.sign({userId:user._id},"secretKey")
       return res.status(201).send({msg:"success",data:{token:token}})
    }
}


module.exports.createUser=createUser
module.exports.updateUser=updateUser
module.exports.login=login
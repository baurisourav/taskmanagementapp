const taskModel=require('../models/taskModel')


const createTask=async function createTask(req,res){
    try{
        const data=await taskModel(req.body)
        if(data)return res.status(201).send({msg:"task created successfully"})
    }
    catch(err){
        return res.status(500).send({msg:err.message})
    }
 
}

const fetchTask=async function fetchTask(req,res){
    const data=await taskModel.findById(_id=req.body._id)
    if(data)return res.status(200).send({msg:"succsess",data:data})
}

const updateTask=async function updateTask(req,res){
    const data=await taskModel.findOneAndUpdate(_id=req.params._id,req.body,{new:true})
}

module.exports.createTask=createTask
module.exports.fetchTask=fetchTask
module.exports.updateTask=updateTask
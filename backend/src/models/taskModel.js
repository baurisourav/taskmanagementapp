const mongoose=require('mongoose')

const taskModel=new mongoose.Schema({
        title:{type:String,
                required:true},
        description:{
            type:String,
            required:true
        },
        status:{type:String,
                required:true,
                enum:['progress','completed'],
                default:'progress'
                },
        createdDate:{type:Date},
        dueDate:{type:Date},
        createdBy:{
            type:String,
            required:true
        }
},{timestamps:true})

module.exports=mongoose.model('task',taskModel)
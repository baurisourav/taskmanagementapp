const express=require('express')
const mongoose=require('mongoose')
const app=express()
const route=require('./src/route/router')
const bodyparser=require('body-parser')
const cors=require('cors')

app.use(cors())

app.use(bodyparser.json())


mongoose.connect('mongodb+srv://pritamsam1:Pritamsam1@project.383arvg.mongodb.net/taskdatabase').then(()=>{
    console.log('mongodb connected')
}).catch((err)=>{
    console.log(err)
})

app.use(route)

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})
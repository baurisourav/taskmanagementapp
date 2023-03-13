const express=require('express')
const router=express.Router()
const {login,createUser}=require('../controller/userController')


router.post('/register',createUser)
router.post('/login',login)

module.exports=router;
const express=require('express')
const { append } = require('express/lib/response')
const router=express.Router()
const { registerUser, authUser }=require('../Controllers/userControllers')

// if user goes to api/users/
router.route('/').post(registerUser);


// if user goes to api/users/login
router.route('/login').post(authUser);
module.exports=router;
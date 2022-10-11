const express=require('express')

const router=express.Router()
const { registerUser, authUser, getMail }=require('../Controllers/userControllers')

// if user goes to api/users/ - it is register page
router.route('/').post(registerUser);


// if user goes to api/users/login it is login page
router.route('/login').post(authUser);

router.route('/getmail').post(getMail);
module.exports=router;
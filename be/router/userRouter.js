const express= require('express');
const router =express.Router();
const {addFunction} =require('../controllers/userControllers')


router.post('/post',addFunction)

module.exports=router
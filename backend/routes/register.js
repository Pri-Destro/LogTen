console.log('in register.js ')
const {User} = require('../db')
const bcrypt = require('bcrypt')
const express = require('express')

const router = express.Router()

router.post(async (req,res)=>{

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    try{
        const userExist = await User.findOne({email})

        if (userExist) {
            return res.status(409).json({
                message : "User already exists, please Login"
            })       
        }         
    }catch(e) {
            res.status(403).json({
                message : "Internal server error"
            })
    } 

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    
    await User.create({
       firstName : firstName,
       lastName : lastName,
       email : email,
       password : hash
    })

    res.status(200).json({
        msg : "user created successfully"
    })
})

module.exports = router
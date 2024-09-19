console.log('in login.js ')
const express = require('express')
const {User} = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post("/",async (req,res)=>{

    const email = req.body.email;
    const bodyPassword = req.body.password;
    const JWT_SECRET = process.env.JWT_SECRET

    try{
        const user = await User.findOne({email})
        
        if (!user) {
            return res.status(403).json({
                message : "Authentication failed! email or password is wrong"
            })       
        }
        const hashedPass = user.password
        const passOk = await bcrypt.compare(bodyPassword,hashedPass)
        console.log(passOk)

        if(passOk){

            token = jwt.sign({
                userId : user._id
            },JWT_SECRET,{ expiresIn: 60 * 60 })
    
            console.log(token)

            return res.status(200).json({
                message : "User logged in succesfully",
                token : "token"
            })}  


        res.status(403).json({
            message : "Authentication failed! email or password is wrong"
        })

    }catch(e) {

            res.status(500).json({
                message : "Internal server error"
            })
    }



})

module.exports = router;
console.log('in register.js ')
const {User} = require('../db')
const bcrypt = require('bcrypt')


const login = async (req,res)=>{

    const email = req.body.email;
    const bodyPassword = req.body.password;

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

        if(!passOk){

            return res.status(403).json({
                message : "Authentication failed! email or password is wrong"
            })}  

    
        res.status(200).json({
            message : "User logged in succesfully"
    
        })


    }catch(e) {

            res.status(500).json({
                message : "Internal server error"
            })
    }


}


module.exports = {
    login
}
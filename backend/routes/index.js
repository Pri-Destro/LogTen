const express = require('express')
const login = require('./login')
const register = require('./register')
const signupValidation = require("../middlewares/signupValidation")
const verifyCaptcha = require("../middlewares/captchaAuth")

const router = express.Router()

router.use("/login",verifyCaptcha , login)
router.use("/register",signupValidation, verifyCaptcha, register)



module.exports = router;
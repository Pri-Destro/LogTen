const express = require('express')
const login = require('./login')
const register = require('./register')
const signupValidation = require("../middlewares/signupValidation")

const router = express.Router()

router.use("/login",login)
router.use("/register",signupValidation,register)



module.exports = router;
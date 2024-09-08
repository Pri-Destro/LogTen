require('dotenv').config();
require('./db/index');

const express = require('express')
const cors = require('cors')
const {register} = require('./routes/register')
const {login} = require('./routes/login')
const {signupValidation,loginValidation} = require('./middlewares/validation')


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login",loginValidation,login)

app.post("/register",signupValidation,register)
app.listen(PORT,() => {

    console.log("server started")

})


const express = require('express')
const cors = require('cors')
const {signupValidation} = require('./middlewares/validation')

const bcrypt = require('bcrypt')

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post("/register",signupValidation,register)

app.listen(PORT,() => {

    console.log("server started")

})


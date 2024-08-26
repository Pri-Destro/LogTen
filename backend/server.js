const express = require('express')
const cors = require('cors')

// import {SchemaCheck} from './zod'
const PORT = 3000;

// const cors = cors();
const app = express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post("/register",(req,res)=>{
    
    console.log(req.body);

    res.json({
        status : 'ok'
    });
})

app.listen(PORT,() => {

    console.log("server started")

})


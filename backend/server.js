require('dotenv').config();
require('./db/index');

const express = require('express')
const cors = require('cors')
const mainRouter = require('./routes/index')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter)
app.use("/",mainRouter)

app.listen(PORT,() => {

    console.log("server started")

})


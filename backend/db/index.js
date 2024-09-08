console.log('in db/index.js')

const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((e) => {
    console.error("MongoDB connection error:", e);
    process.exit(1)
});


const UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String
})

const User = mongoose.model('User',UserSchema)

module.exports = {
    User
}
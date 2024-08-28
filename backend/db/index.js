const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://pricode22:lcGwUhsQ4NP9rwbc@cluster0.uhxnb.mongodb.net/user")



const UserSchema = new mongoose.Schema({
    FirstName : String,
    LastName : String,
    Email : String,
    Password : String
})

const User = mongoose.model('User',UserSchema)

module.exports = {
    User
}
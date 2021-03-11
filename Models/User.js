const mongoose = require('mongoose')
const { isEmail } = require('validator')
const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        require : [true, 'Please Enter an email'],
        unique : true,
        lowercase : true,
        validate : [isEmail , 'Please ENter a valid email']
    },
    password : {
        type : String,
        minlength : [6, 'Minimum Password length is 6 character'],
        required : [true, 'Please Enter a password']
    }
})

module.exports = mongoose.model('user', UserSchema)
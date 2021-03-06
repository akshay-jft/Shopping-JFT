const mongoose    = require('mongoose')
const { isEmail } = require('validator')
const bcryt       = require('bcrypt')

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

UserSchema.pre('save', async function(next) {
    const salt = await bcryt.genSalt()
    this.password = await bcryt.hash(this.password, salt)
    next()
})

// Static method to login users 
UserSchema.statics.login = async function(email,password){
    console.log(this)
    const user = await this.findOne({ email : email })
    if(user){
        const auth = await bcryt.compare(password, user.password)
        if(auth){
            return user
        }
        throw Error('Incorrect Password')
    }else{
        throw Error('Incorrect Email')
    }
}

module.exports = mongoose.model('user', UserSchema)
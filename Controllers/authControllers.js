const { json } = require('body-parser')
const User = require('../Models/User.js')

module.exports.signup_get = (req,res)=>{
    res.render('signup')
}

module.exports.login_get = (req,res)=>{
    res.render('login')
}

module.exports.signup_post = async (req,res)=>{
    const { email , password } = req.body

    try{
       const user =  await User.create({ email, password})
       res.status(201).json(user)
    }catch(err) {
        res.status(404).json(err)
    }
}

module.exports.login_post = async (req,res)=>{
    res.send('Login Post')
}
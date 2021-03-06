const { json } = require('body-parser')
const User     = require('../Models/User.js')
const jwt      = require('jsonwebtoken')
//Create JWT Token
const maxAge = 24 * 60 * 60
const createToken = (id)=>{
    return jwt.sign({ id }, 'jft-grofer-app', { expiresIn : maxAge } )
}

module.exports.signup_get = (req,res)=>{
    res.render('signup')
}

module.exports.login_get = (req,res)=>{
    res.render('login')
}

module.exports.signup_post = async (req,res)=>{
    const { email , password } = req.body
    try{
       const user =  await User.create({ email, password })
       const token = createToken(user._id)
       res.cookie('jwt', token, { httpOnly : true, maxAge : maxAge * 1000})
       res.redirect('/home')
    }catch(err) {
        res.status(404).json(err)
    }
}

module.exports.login_post = async (req,res)=>{
    const { email, password } = req.body
    try{
        const user = await User.login(email,password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly : true, maxAge : maxAge * 1000})
        res.redirect('/home')
    }catch(err){
        res.status(400).json({err : err.message})
    }
}

module.exports.logout_get = async(req,res)=>{
    res.cookie('jwt', { maxAge : 1})
    res.redirect('/login')
}
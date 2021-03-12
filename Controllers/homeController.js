const { json } = require('body-parser')
const User     = require('../Models/User.js')

module.exports.loadHome = async(req,res)=>{
    res.render('home')
}
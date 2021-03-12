const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, 'jft-grofer-app', (err, decodedToken)=>{
            if(!err){
                console.log(decodedToken)
                next()
            }else{
                console.log(err)
                res.redirect('/login')
            }
        })
    }else{
        res.redirect('/login')
    }
}

module.exports = { requireAuth }
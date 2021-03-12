const express       = require('express')
const bodyParser    = require('body-parser')
const cookieParser  = require('cookie-parser')
const mongoose      = require('mongoose')
const PORT          = process.env.PORT || 5000

// App 
const app = express()

// Application Configuration
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(cookieParser())

// Router and Controllers
const authRoutes = require('./routes/authRoutes.js')
app.use(authRoutes)


// Database Connection
const dbUri = 'mongodb+srv://root:root@shopping.kw3lr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbUri, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
    }).then(app.listen(PORT, ()=>{ console.log(`app listening at port number ${PORT}`) }))
    .catch(err=>{  console.log(err) })
    
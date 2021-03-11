const express    = require('express')
const bodyParser =  require('body-parser')
const mongoose   = require('mongoose')
const app        = express()
const PORT       = process.env.PORT || 5000
// Application Configuration
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
// Database Connection
const dbUri = 'mongodb://localhost:27017/test'
mongoose.connect(dbUri, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
    }).then(result => app.listen(PORT, ()=>{
        console.log(`app listening at port number ${PORT}`)
    }))
    .catch(err=>{
        console.log(err)
    })
var express = require('express')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
User = require('./model/userlistmodel')
Userpassword = require('./model/userlistmodel2')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/assignment', function(error){
    if(error) throw error
    console.log('Successfully connected');
})
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/userlistroutes.js')
routes(app)

app.listen(port)
console.log('User List started on : '+ port)


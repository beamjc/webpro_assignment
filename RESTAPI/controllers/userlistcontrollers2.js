'use strict'
var mongoose = require('mongoose')
Userpassword = mongoose.model('userlogin')

exports.checkuserpass = function(req, res){
    Userpassword.find({}, null, function(err, user){
        if(err) throw err
        res.json(user)
    })
}
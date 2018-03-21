'use strict'
var mongoose = require('mongoose')
User = mongoose.model('users')

exports.createUser = function(req, res){
    var newUser = new User(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}
exports.listAllUser = function(req, res){
    var query = { sort: { firstName: 1 } }
    User.find({}, null, query, function(err, user){
        if(err) throw err
        //console.log(user)
        res.json(user)
    })
}
exports.updateUser = function(req, res){
    console.log(req.params.userID)
    var newUser = {}
    newUser = req.body
    console.log(newUser)
    User.findByIdAndUpdate(req.params.userID, newUser, {new: true}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.readAUser = function(req, res){
    console.log(req.params.userID)

    User.findById(req.params.userID, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.deleteUser = function(req, res){
    User.findByIdAndRemove(req.params.userID, function(err, user){
        if(err) throw err
        const response = {
            message: "Delete user id: "+ req.params.userID +" successfully",
            //id: user._id
        }
        res.json(response)
    })
}
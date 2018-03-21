'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserScheme = new Schema({
    contactID: {
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    mobileNo: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String
    },
    facebook: {
        type: String
    },
    imageUrl: {
        type: String
    }


})
module.exports = mongoose.model('users', UserScheme)
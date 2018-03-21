'use strict'
module.exports = function(app){
    var userList = require('../controllers/userlistcontrollers')
    var userList2 = require('../controllers/userlistcontrollers2')

    app.route('/users')
        .get(userList.listAllUser)
        .post(userList.createUser)

    app.route('/users/:userID')   
        .get(userList.readAUser) 
        .post(userList.updateUser)
        .delete(userList.deleteUser)
    
    app.route('/login')
        .get(userList2.checkuserpass)
        

}
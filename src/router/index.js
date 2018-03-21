import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import AddUser from '@/components/AddUser'
import edituser from '@/components/edit'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'login',
        component: login
      },
      {
          path: '/index',
          name: 'index',
          component: index
      },
      {
        path: '/adduser',
        name : 'adduser',
        component: AddUser
      },
      {
        path: '/edituser/:userID',
        name: edituser,
        component: edituser
      }

    ]
  })

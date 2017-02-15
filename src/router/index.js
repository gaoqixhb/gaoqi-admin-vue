import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import auth from '../auth'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (auth.loggedIn()) {
          next({
            path: '/'
          })
        } else {
          next()
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!auth.loggedIn() && to.name !== 'Login') {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
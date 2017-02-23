import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('./views/Home/home'))
        }, 'home')
      },
      children: [
        
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('./views/Login/login'))
        }, 'login')
      },
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
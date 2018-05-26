import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/users/Index.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    }
  ]
})

export default router

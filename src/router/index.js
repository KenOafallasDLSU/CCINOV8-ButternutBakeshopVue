import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import EmployeeFacing from '../views/EmployeeFacing.vue'
import AdminFacing from '../views/AdminFacing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/employee',
    name: 'EmployeeFacing',
    component: EmployeeFacing
  },
  {
    path: '/admin',
    name: 'AdminFacing',
    component: AdminFacing
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

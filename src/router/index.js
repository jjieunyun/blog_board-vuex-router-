import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board/:id',
    name: 'pageview',
    component: function () {
      return import('../views/pageView.vue')
    }
  },
  {
    path: '/write',
    name : 'writeview',
    component: function () {
      return import('../views/WriteView')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

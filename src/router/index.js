import Vue from 'vue'
import VueRouter from 'vue-router'
import Library from '../views/Library.vue'
import SingleBook from '../views/SingleBook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Library',
    component: Library
  },
  {
    path: '/SingleBook/:id',
    name: 'SingleBook',
    component: SingleBook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

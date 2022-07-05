/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

//Defining the Routes (Slide-2)
export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import('../views/About.vue')
  },{
    path: '/order',
    name: 'order',
    component: () =>
        import('../views/Order.vue'),
    /* Passing the Content */
    props: true
  },{
    path: '/detailorder',
    name: 'detailorder',
    component: () =>
        import('../views/DetailOrder.vue'),
    /* Passing the Content */
    props: true
  }
]

//Setting up the Router Instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

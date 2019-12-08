import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Demo from '../views/Demo.vue'
// import Father from '../views/Father.vue'
// import Son from '../views/Son.vue'
// import Earchs from '../views/Earchs.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    // {
    //   name: 'demo',
    //   path: '/demo',
    //   component: Demo
    // }, {
    //   name: 'son',
    //   path: '/son',
    //   component: Son

    // },
    // {
    //   name: 'father',
    //   path: '/father',
    //   component: Father

    // },
    // {
    //   name: 'earchs',
    //   path: '/earchs',
    //   component: Earchs

    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/About.vue')
    // }
  ]
})

export default router

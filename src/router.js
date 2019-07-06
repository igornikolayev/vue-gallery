import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Gallery from './views/Gallery.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: List
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    }
  ]
})

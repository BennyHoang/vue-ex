import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home-component/HelloWorld'
import About from '@/components/about-component/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})

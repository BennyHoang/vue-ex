import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home-component/HelloWorld'
import About from '@/components/about-component/About'
import Pokemon from '@/components/pokemon-component/Pokemon'

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
    },
    {
      path: '/Pokemon',
      name: 'Pokemon',
      component: Pokemon
    }
  ]
})

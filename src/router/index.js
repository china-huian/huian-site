import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Honor from '@/components/Honor'
import cases from '@/components/case'
// import detail from '@/components/detail'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/cases',
      name: 'cases',
      component: cases
    }
  ]
})

export default router

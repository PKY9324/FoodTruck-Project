import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Search from '@/components/Search/index'
import SearchFocus from '@/components/SearchFocus/index'
import LoginModal from '@/components/LoginModal/index'
import PageNotFound from '@/components/PageNotFound/index'

import FoodtruckList from '@/components/Search/FoodtruckList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'search',
      path: '/search/:id',
      component: Search,
      props: route => ({
        params: route.params.id
      })
    },
    {
      name: 'search',
      path: '/search/:id/:name',
      component: SearchFocus
    },
    {
      name: '404',
      path: '*',
      component: PageNotFound
    },
    {
      // test flied
      name: 'foodtrucklist',
      path: '/foodtrucklist',
      component: FoodtruckList
    }
  ],
})
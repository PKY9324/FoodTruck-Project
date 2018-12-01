import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Search from '@/components/Search/index'
import SearchFocus from '@/components/SearchFocus/index'
import LoginModal from '@/components/LoginModal/index'
import WriteReview from '@/components/WriteReview/index'
import PageNotFound from '@/components/PageNotFound/index'

import FoodtruckList from '@/components/Search/FoodtruckList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
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
      name: 'searchFocus',
      path: '/search/:objectID/:name',
      component: SearchFocus,
      props: route => ({
        params: route.params.name,
        params: route.params.objectID
      })
    },
    {
      name: 'writeReview',
      path: '/search/:objectID/:name/write',
      component: WriteReview,
      props: route => ({
        params: route.params.name,
        params: route.params.objectID
      })
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
  ]
})

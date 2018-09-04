import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Survey from './views/Survey.vue'
import Municipality from './views/Municipality.vue'
import Results from './views/Results.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/municipality',
      name: 'municipality',
      component: Municipality
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

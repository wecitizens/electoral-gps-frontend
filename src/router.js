import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Survey from './views/Survey.vue'
import Municipality from './views/Municipality.vue'
import Results from './views/Results.vue'
import Stats from './views/Stats.vue'
import Translations from './views/Translations.vue'
import Questions from './views/Questions.vue'
import PollInsufficientCandidates from './views/PollInsufficientCandidates.vue'

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
      path: '/questions',
      name: 'questions',
      component: Questions
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/translations',
      name: 'translations',
      component: Translations
    },
    {
      path: '/poll/insufficient-candidates',
      name: 'poll-insufficient-candidates',
      component: PollInsufficientCandidates
    }
  ],
  scrollBehavior() {
    return {x: 0, y: 0};
  }
})

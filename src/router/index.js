import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/pages/HomeView'
import TwitterView from '@/components/pages/TwitterView'
import YoutubeView from '@/components/pages/YoutubeView'
import InstagramView from '@/components/pages/InstagramView'
import BootstrapVueTutolial from '@/components/pages/BootstrapVueTutolial'
import AnimeSummaryView from '@/components/pages/AnimeSummaryView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: {
        icon: 'home'
      }
    }, {
      path: '/twitter',
      name: 'Twitter',
      component: TwitterView,
      meta: {
        icon: '[fab, twitter]'
      }
    }, {
      path: '/youtube',
      name: 'Youtube',
      component: YoutubeView,
      meta: {
        icon: '[fab, youtube]'
      }
    }, {
      path: '/instagram',
      name: 'Instagram',
      component: InstagramView,
      meta: {
        icon: '[fab, instagram]'
      }
    }, {
      path: '/bv-tuto',
      name: 'BootstrapVueTutolial',
      component: BootstrapVueTutolial,
      meta: {
        icon: 'code'
      }
    }, {
      path: '/anime',
      name: 'AnimeSummaryView',
      component: AnimeSummaryView,
      meta: {
        icon: 'at'
      }
    }
  ]
})

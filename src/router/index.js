import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/page/HomeView'
import TwitterView from '@/components/page/TwitterView'
import YoutubeView from '@/components/page/YoutubeView'
import InstagramView from '@/components/page/InstagramView'
import BootstrapVueTutolial from '@/components/page/BootstrapVueTutolial'
import AnimeSummaryView from '@/components/page/AnimeSummaryView'

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

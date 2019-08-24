import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/page/HomeView'
import TwitterView from '@/components/page/TwitterView'
import YoutubeView from '@/components/page/YoutubeView'
import InstagramView from '@/components/page/InstagramView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    }, {
      path: '/twitter',
      name: 'Twitter',
      component: TwitterView
    }, {
      path: '/youtube',
      name: 'Youtube',
      component: YoutubeView
    }, {
      path: '/instagram',
      name: 'Instagram',
      component: InstagramView
    }
  ]
})

<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li
          class="nav-item"
          v-for="(item, index) in filterMenu()" :key="index"
        >
          <router-link tag="a"
            class="nav-link"
            :to="item.to">
            <v-fa :icon="item.icon"/>&nbsp;{{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Slider from '@jeremyhamm/vue-slider'

export default {
  components: {
    Slider
  },
  data () {
    return {
      // TODO router読み込みにしたい
      menuItems: [
        {
          name: 'home',
          to: '/home',
          icon: 'home',
          order: 10
        }, {
          name: 'twitter',
          to: '/twitter',
          icon: ['fab', 'twitter'],
          order: -1
        }, {
          name: 'youtube',
          to: '/youtube',
          icon: ['fab', 'youtube'],
          order: -1
        }, {
          name: 'instagram',
          to: '/instagram',
          icon: ['fab', 'instagram'],
          order: -1
        }, {
          name: 'sand box',
          to: '/bv-tuto',
          icon: 'code',
          order: 20
        }, {
          name: 'anime',
          to: '/anime',
          icon: 'at',
          order: 30
        }
      ]
    }
  },
  methods: {
    filterMenu: function () {
      return this.menuItems.filter((item) => {
        return item.order !== -1
      }).sort((itemA, itemB) => {
        if (itemA.order > itemB.order) {
          return 1
        } else if (itemA.order < itemB.order) {
          return -1
        } else {
          return 0
        }
      })
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.$router.push(
      this.filterMenu()[0].to
    )
  },
  beforeUpdate () {},
  updated () {},
  beforeDestory () {},
  destroyed () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link tag="a" class="nav-link active" to="/home" exact>
            <v-fa icon="home"/>&nbsp;Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link active" to="/twitter">
            <v-fa :icon="['fab', 'twitter']"/>&nbsp;Twitter
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link active" to="/youtube">
            <v-fa :icon="['fab', 'youtube']"/>&nbsp;Youtube
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link active" to="/instagram">
            <v-fa :icon="['fab', 'instagram']"/>&nbsp;Instagram
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mouted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestory: function () {},
  destroyed: function () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

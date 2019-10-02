<template>
  <b-container>
    <ul class="list-unstyled">
        <b-media
          tag="li"
          vertical-align="center"
          v-for="(item, index) in items" :key="index"
        >
          <template v-slot:aside>
            <b-img :src="item.snippet.thumbnails.default.url" width="64"></b-img>
          </template>
          <h5 class="mt-0 mb-1">{{ item.snippet.title }}</h5>
        </b-media>
    </ul>
  </b-container>
</template>

<script>
export default {
  props: [
    'playListid'
  ],
  data () {
    return {
      items: [],
      nextToken: ''
    }
  },
  methods: {
    getPlayListItems () {
      const maxResults = '20'
      const part = 'snippet'
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=${part}&playlistId=${this.playListId}&maxResults=${maxResults}&pageToken=${this.nextToken}&key=${this.$config.VUE_APP_YOUTUBE_API_KEY}`
      const self = this
      this.$axios.get(url)
        .then(function (res) {
          // success
          self.items = self.items.concat(res.data.items)
          self.nextToken = res.data.nextPageToken
        })
        .catch(function (error) {
          // error
          console.log(`Error! HTTP Status: ${error.response.status} ${error.response.statusText}`)
        })
    }
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted () {
    console.log(this.playListId)
    this.getPlayListItems()
  },
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestory: function () {},
  destroyed: function () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

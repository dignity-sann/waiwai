<template>
  <b-container>
    <h5>
      <b-badge pill variant="primary">New!</b-badge>&nbsp;Playlists !!
    </h5>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(item, index) in filterMaxres()" :key="index"
        :img-src="(item.snippet.thumbnails.maxres) ? item.snippet.thumbnails.maxres.url : item.snippet.thumbnails.high.url"
        @click="v-b-modal.playListItem"
      >
        <b-button v-b-modal="'playListItem' + index">全貌</b-button>
        <b-modal
          :id="'playListItem' + index"
          size="xl"
          scrollable
          centered
          hide-footer
          :title="item.snippet.title"
        >
          <PlayListItems :playListid="item.id">
          </PlayListItems>
        </b-modal>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>
<script>
import PlayListItems from '@/components/parts/PlayListItems'

export default {
  components: {
    PlayListItems
  },
  data () {
    return {
      slide: 0,
      items: [],
      nextToken: '',
      playListTitle: '',
      playListId: ''
    }
  },
  methods: {
    onSlideStart (slide) {
    },
    onSlideEnd (slide) {
      if (this.slide + 5 > this.items.length) {
        this.getChanelList()
      }
    },
    filterMaxres () {
      return this.items.filter((item) => {
        return item.snippet.thumbnails.maxres
      })
    },
    getChanelList () {
      const maxResults = '20'
      const part = 'snippet'
      const channelId = 'UCSkLRGGIGKOtinamhcy_42g'
      const url = `https://www.googleapis.com/youtube/v3/playlists?part=${part}&channelId=${channelId}&maxResults=${maxResults}&pageToken=${this.nextToken}&key=${this.$config.VUE_APP_YOUTUBE_API_KEY}`
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
    },
    showPlayList (playListid, title) {
      this.playListId = playListid
      this.playListTitle = title
      this.$refs['playListItem'].show()
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.getChanelList()
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

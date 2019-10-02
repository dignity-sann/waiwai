<template>
  <div>
    <h1>b-alert</h1>
    <hr>
    <h2>Contextual variants</h2>
    <hr>
    <b-alert show>Default Alert</b-alert>
    <b-alert show variant="primary">Primary</b-alert>
    <b-alert show variant="secondary">Secondary</b-alert>
    <b-alert show variant="success">Success</b-alert>
    <b-alert show variant="danger">Danger</b-alert>
    <b-alert show variant="warning">Warning</b-alert>
    <b-alert show variant="info">Info</b-alert>
    <b-alert show variant="light">Light</b-alert>
    <b-alert show variant="dark">Dark</b-alert>

    <hr>
    <h2>Additional content inside alerts</h2>
    <hr>
    <b-alert show variant="dark">
      <h4 class="alert-heading">ヘッダ</h4>
      <p>コンテンツ</p>
      <hr>
      <p class="mb-0">サブ</p>
    </b-alert>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>

    <b-button v-b-modal.channelItem>Show Modal</b-button>
    <b-modal
      id="channelItem"
      size="xl"
      title="iiii"
      scrollable="true"
      centered="true"
      hide-footer="true"
    >
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
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      items: [],
      nextToken: ''
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getPlayListItems (playListId) {
      const maxResults = '20'
      const part = 'snippet'
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=${part}&playlistId=${playListId}&maxResults=${maxResults}&pageToken=${this.nextToken}&key=${this.$config.VUE_APP_YOUTUBE_API_KEY}`
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
    this.getPlayListItems('PLWTfVW0mnPhmIuQyW6eFgHa1AF3lYsw-7')
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

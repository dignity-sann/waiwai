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
  </div>
</template>

<script>
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted () {},
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestory: function () {},
  destroyed: function () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

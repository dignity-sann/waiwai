<template>
  <div>
    <b-form-group
      id="fieldset-year"
      label-cols="2"
      description="select single year"
      label="Year"
      label-for="input-year"
    >
      <b-form-select id="input-year"
        v-model="selected"
        :options="options"
        size="sm"
        v-on:change="onchange">
      </b-form-select>
    </b-form-group>
    <div class="row">
      <div
        v-for="(item, index) in items" :key="index"
        class="col-3">
        <b-card
          :title="item.title_short1"
          img-src="サムネ表示させたい"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text >
            {{ item.title }}
          </b-card-text>
          <b-button pill target="_blank" size="sm" :href="'https://twitter.com/' + item.twitter_account" variant="primary">
            <v-fa :icon="['fab', 'twitter']"/>&nbsp;Twitter
          </b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '',
      isBusy: false,
      fields: {
        title: {
          label: 'タイトル',
          sortable: true
        },
        title_short1: {
          label: 'サブタイ',
          sortable: false
        },
        public_url: {
          label: '公式URL',
          sortable: false
        },
        twitter_account: {
          label: 'Twitter',
          sortable: false
        }
      },
      options: [],
      items: []
    }
  },
  methods: {
    onchange: function () {
      const url = `http://api.moemoe.tokyo/anime/v1/master/${this.selected.split(',')[0]}/${this.selected.split(',')[1]}`
      const self = this
      this.isBusy = true
      this.$axios.get(url)
        .then(function (res) {
          // success
          self.items = res.data
        })
        .catch(function (error) {
          // error
          console.log(`Error! HTTP Status: ${error.response.status} ${error.response.statusText}`)
        })
        .finally(function () {
          self.isBusy = false
        })
    },
    getImage: (item) => {
      this.$cheerio.fetch('https://twitter.com/' + item.twitter_account)
        .then(function (result) {
          console.log(result.$('title').text())
        })
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    const url = 'http://api.moemoe.tokyo/anime/v1/master/cours'
    const self = this
    this.$axios.get(url)
      .then(function (res) {
        // success
        for (const key in res.data) {
          let items = {}
          items.text = res.data[key].year + '年度' + res.data[key].cours + '期'
          items.value = res.data[key].year + ',' + res.data[key].cours
          self.options.push(items)
        }
        self.selected = self.options[0].value
      })
      .catch(function (error) {
        // error
        console.log(`Error! HTTP Status: ${error.response.status} ${error.response.statusText}`)
      })
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

<template>
  <div class="weather">
    <h1>This is weather page</h1>
    <template v-if="list!==null">
      <table class="listBox" border="4">
        <tr>
          <th>地域</th>
          <th>最高気温</th>
          <th>最低気温</th>
        </tr>
        <tr v-for="val in list.data[1].tempAverage.areas" :key="val.index">
          <td>{{ val.area.name }}</td>
          <td>{{ val.max }}</td>
          <td>{{ val.min }}</td>
        </tr>
      </table>
    </template>

  </div>
</template>

<script>
export default ({
  data() {
    return {
      list: null
    }
  },

  methods: {
    //天気取得
    getWeather() {
      let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"
      this.$axios.get(url)
        .then(res => {
          this.list = res
        }).catch(err => {
          console.log(err)
        })
    },
  },

  created () {
    this.getWeather()
  }
})
</script>

<style lang="scss" scoped>
.listBox {
  margin: auto;
}
</style>



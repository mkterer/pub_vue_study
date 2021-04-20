<template>
  <div class="weather">
    <h1>This is weather page</h1>
    <button @click="getWeather">getWeather</button>
    please look console log    
  </div>
</template>

<script>
export default ({
  methods: {
    getWeather() {
      let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"
      this.$axios.get(url)
        .then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    },
  }
})
</script>



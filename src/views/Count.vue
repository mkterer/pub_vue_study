<template>
  <div class="count">
    <h1>This is an count page</h1>
    {{$store.state.count}}
    <button @click="incre">+</button>
    <button @click="decre">-</button>
  </div>
</template>

<script>
export default ({
  methods: {
    incre() {
      this.$store.commit('incre', 5)
    },

    decre() {
      this.$store.commit('decre', 2)
    },

  }
})
</script>

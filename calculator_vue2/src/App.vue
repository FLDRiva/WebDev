<template>
  <div id="app">
    <OneCalc />
  </div>
</template>

<script>
import OneCalc from '@/components/OneCalc.vue'
export default {
  name: 'App',
  components: {
    OneCalc,
  }
}
</script>

<style lang="scss">
  #app {
  width: 13vw;
  box-shadow: 0 3px 15px grey;
}
</style>

<template>
  <div class="check-container">
    <div class="check-box">
      <input
        v-model="saveCheck" 
        type="checkbox"
        role="switch"
        name=""
      >
    </div>
    <span>Remember me</span>
  </div>

</template>


<script>
export default {
  data() {
    return {
      saveCheck: false,
    }
  }
}
</script>


<style lang="scss" scoped>
@import '/src/assets/style/chBox'

</style>
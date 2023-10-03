<template>

  <div class="container-input">
    <div class="login-input">
    <img width="18" height="19" view-box="0 0 18 19" fill="none" src="https://img.icons8.com/fluency-systems-filled/48/737373/user-credentials.png" alt="user-credentials">
      
    <input type="text" :placeholder="placeholder">
    </div>
  </div>
  
</template>


<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: String,
    placeholder: String,
  }
}
</script>


<style lang="scss" scoped>
@import '/src/assets/style/input'

</style>

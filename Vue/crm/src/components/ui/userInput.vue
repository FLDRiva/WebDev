<template>

  <div class="container-input">
    <div class="login-input">
    <img width="18" height="19" view-box="0 0 18 19" fill="none" src="https://img.icons8.com/fluency-systems-filled/48/737373/user-credentials.png" alt="user-credentials">
      
    <input 
      type="text" 
      v-model="writeLogin"
      maxlength="40"
      minlength="1"
      :placeholder="placeholder"
    >
    </div>
  </div>
  
</template>


<script>
export default {
  data() {
    return {
      writeLogin: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '',
      required: true
    },
    model: {
      prop: 'value',
      events: 'change'
    },
  }
}
</script>


<style lang="scss" scoped>
@import '/src/assets/style/input'

</style>

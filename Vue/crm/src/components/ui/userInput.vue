<template>

  <div class="container-input">
    <div class="login-input">
    <img width="18" height="19" view-box="0 0 18 19" fill="none" src="https://img.icons8.com/fluency-systems-filled/48/737373/user-credentials.png" alt="user-credentials">
      
    <input
      v-model="writeLogin"
      maxlength="40"
      minlength="1"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      
    >
    <!-- <p>{{ writeLogin }}</p> -->
    </div>
  </div>
  
</template>


<script>
export default {
  data() {
    return {
      writeLogin: '',
    }
  },
  methods: {
    handLeInput () {
      this.$emit('input', this.content)
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
    },
    type : {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    }

  }
}
</script>


<style lang="scss" scoped>
@import '/src/assets/style/input'

</style>

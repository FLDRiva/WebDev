<template>
  <div class="login-btn">
    <button type="button" @click="$emit('click')">
      <slot />
    </button>
  </div>
</template>


<script>
export default {
  props: {
    labelButton: {
      type: String,
      default: ''
    },
  },
}

</script>


<style lang="scss" scoped>
  button {
    background: #e5e5e5;
    outline: none;
    min-width: 209px;
    height: 43px;
    border-radius: 5%;
    margin-top: 2vh;
    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    color: #7d7a7a;
    border: 2px solid #80808047;
    box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
    &:hover {
      border: 2px solid #9b9292;
      border-color: #9b9292;
      background-color: #808000;
      color: black;
    }
  }

</style>
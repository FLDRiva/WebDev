<template>
  <div class="login-btn">
    <button>
      {{ labelButton }}
    </button>
  </div>
</template>


<script>
export default {
  props: {
    labelButton: {
      type: String,
      default: '12'
    }
  }
}

</script>


<style lang="scss" scoped>
  button {
    background: #696969;
    width: 11vw;
    height: 5vh;
    border-radius: 5%;
    margin-top: 2vh;
    font-size: 1.2em;
    font-family: 'Roboto Slab';
  }

</style>
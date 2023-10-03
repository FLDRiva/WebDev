<template>
  <div class="save-me">
    <input type="checkbox">
    <span>Запомнить меня</span>
  </div>
</template>


<script>


</script>


<style lang="scss" scoped>
  .save-me {
    display: flex;
    gap: 1vw;
    align-items: center;
    margin-top: 3vh;
    input {
      min-height: 3vh;
      min-width: 3vh;
    }
    span {
      font-size: 1.2em;
      font-family: 'Roboto Slab';
    }
  }

</style>
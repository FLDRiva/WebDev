<template>
  <div class="pass-input">
    <p>Пароль</p>
    <input type="text">
  </div>
</template>


<script>


</script>


<style lang="scss" scoped>
  .pass-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    font-weight: 600;
    font-family: 'Roboto Slab';
    p {
    margin: 0 0 1vh 0;
    font-size: 1.2em;
    font-weight: 700;
    }
    input {
      min-height: 5vh;
      min-width: 5vh;
      border: solid 2px #DCDCDC;
      border-radius: 4%;
      background-color: #696969;
      color: #FFF5EE;
    }
  }


</style>
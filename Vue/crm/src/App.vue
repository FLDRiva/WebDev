<template>
  <div id="app">
    <div class="container">
      <LoadingPage />
    </div> 
  </div>
</template>

<script>
import LoadingPage from '../src/views/LoadingPage.vue'
export default {
  name: 'App',
  components: {
    LoadingPage,
  },

}
</script>

<style lang="scss" scoped>
#app {
  align-self: center;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    width: 500px;
    min-height: auto;
    background-color: #eeeeee;
    box-shadow: 8px 10px 12px 0px rgba(3, 5, 7, 0.2);
    border: 2px solid #80808047;
    border-radius: 4%;
    .reg-pass {
      display: flex;
      flex-direction: row;
      gap: 2vw;
      font-size: 16px;
      margin: 3vh 1vw 1vh 1vw;
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
    }
  }
}


</style>

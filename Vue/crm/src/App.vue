<template>
  <div id="app">
    <div class="container">
      <h2 class="h2-name">   
      </h2>
      <userInput 
        :placeholder="UsInputLog.placeholder"
      />
      <userInput 
        :placeholder="UsInputPass.placeholder"
      />
      <SaveMe />
      <LoginBtn :labelButton="'Войти'"/>
      <div class="reg-pass">
        <signIn />
        <RessetPass />
      </div>
    </div> 
  </div>
</template>

<script>
import userInput from '../src/components/ui/userInput'
import SaveMe from '../src/components/ui/SaveMe.vue'
import LoginBtn from '../src/components/ui/LoginBtn.vue'
import signIn from '../src/components/ui/signIn.vue'
import RessetPass from '../src/components/ui/ResetPass.vue'
export default {
  name: 'App',
  components: {
    userInput,
    SaveMe,
    LoginBtn,
    signIn,
    RessetPass,
  },
  data() {
    return {
      UsInputLog: {
        placeholder: "Логин"
      },
      UsInputPass: {
        placeholder: "Пароль"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    min-width: 39vw;
    min-height: 50vh;
    margin-top: 20vh;
    margin-bottom: 1vh;
    background-image: url(../src/assets/images/irongrip.png);
    box-shadow: 23px 21px 16px -11px rgba(244, 250, 255, 0.4);
    border: 2px solid grey;
    border-radius: 4%;
    .reg-pass {
      display: flex;
      flex-direction: row;
      gap: 2vw;
      font-size: 1.3em;
      margin: 3vh 1vw 1vh 1vw;
      font-family: 'Roboto Slab';
    }
    .h2-name {
      margin-top: 1vh;
      font-family: 'Bebas Neue', sans-serif;
    }
  }
}


</style>

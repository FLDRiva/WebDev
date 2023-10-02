<template>
  <div id="app">
    <div class="container">
      <h2 class="h2-name">MixProCRM</h2>
      <LoginInput />
      <PassInput />
      <SaveMe />
      <LoginBtn />
      <div class="reg-pass">
        <ByReg />
        <RessetPass />
      </div>
    </div>
  </div>
</template>

<script>
import LoginInput from '@/components/LoginInput.vue'
import PassInput from '@/components/PassInput.vue'
import SaveMe from '@/components/SaveMe.vue'
import LoginBtn from '@/components/LoginBtn.vue'
import ByReg from '@/components/ByReg.vue'
import RessetPass from '@/components/ResetPass.vue'
export default {
  name: 'App',
  components: {
    LoginInput,
    PassInput,
    SaveMe,
    LoginBtn,
    ByReg,
    RessetPass,
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
    background-image: url(../src/assets/images/backgr_form.jpg);
    background-repeat: no-repeat;
    box-shadow: 29px 29px 12px -14px rgba(0, 0, 0, 0.31);
    .reg-pass {
      display: flex;
      flex-direction: row;
      gap: 2vw;
      font-size: 1.3em;
      margin: 3vh 1vw 1vh 1vw;
      font-family: 'Roboto Slab';
    }
    .h2-name {
      margin-top: 2vh;
      font-family: 'Roboto Slab';
      font-weight: 600;
      font-size: 2em;
    }
  }
}


</style>

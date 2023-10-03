<template>
      <div class="container">
      <userInput
        placeholder="Login"
      />
      <userInput
        placeholder="Password"
      />
      <LoginBtn :labelButton="'Sign in'"/>
      <SaveMe />
      <div class="reg-pass">
        <signIn />
        <RessetPass />
      </div>
    </div> 
</template>

<script>
import userInput from '../components/ui/userInput'
import SaveMe from '../components/ui/SaveMe'
import LoginBtn from '../components/ui/LoginBtn'
import signIn from '../components/ui/signIn'
import RessetPass from '../components/ui/ResetPass'

export default {
  name: 'loadingPage',
  components: {
    userInput,
    SaveMe,
    LoginBtn,
    signIn,
    RessetPass,
  }
}
</script>


<style lang="scss" scoped>
    .reg-pass {
      display: flex;
      flex-direction: row;
      gap: 2vw;
      font-size: 16px;
      margin: 3vh 1vw 1vh 1vw;
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
    }

</style>
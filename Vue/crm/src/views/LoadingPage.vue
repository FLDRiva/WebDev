<template>
      <div class="container">
        <user-input
          placeholder="Login"
          :required="true"
        >
        </user-input> 
        <userInput
          placeholder="Password"
          :type="'password'"
          :required="true"
        />
        <router-link to="/profile">
          <login-btn 
            :labelButton="'Sign in'"
          />
        </router-link>
        <SaveMe />
        <div class="reg-pass">
          <signIn />
          <RessetPass />
        </div>
        
    </div> 
</template>

<script>
import userInput from '../components/ui/UserInput'
import SaveMe from '../components/ui/SaveMe'
import LoginBtn from '../components/ui/LoginBtn'
import signIn from '../components/ui/SignIn'
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
    border: 1px solid #80808047;
    border-radius: 4%;
    .reg-pass {
      display: flex;
      flex-direction: row;
      gap: 10vw;
      font-size: 16px;
      margin: 3vh 1vw 1vh 1vw;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      color: #7d7a7a;
    }
  }

  @media (max-width: 767px) {
    .container {
      width: 388px;
    }
}


</style>
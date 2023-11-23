<template>
      <div class="container">
        <user-input
          placeholder="Login"
          :required="true"
        >
        </user-input> 
        <user-input
          placeholder="Password"
          :type="'password'"
          :required="true"
        />
        <router-link to="/profile">
          <login-btn 
            :labelButton="'Sign in'"
          >
            Sign In
          </login-btn>
        </router-link>
        <save-me />
        <div class="reg-pass">
          <sign-in />
          <resset-pass />
        </div>
        
    </div> 
</template>

<script>
import UserInput from '../components/ui/UserInput'
import SaveMe from '../components/ui/SaveMe'
import LoginBtn from '../components/ui/LoginBtn'
import SignIn from '../components/ui/SignIn'
import RessetPass from '../components/ui/ResetPass'

export default {
  name: 'loadingPage',
  components: {
    UserInput,
    SaveMe,
    LoginBtn,
    SignIn,
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
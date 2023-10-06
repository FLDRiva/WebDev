<template>
  <div class="container">
    <form>
      <userInput
        v-model="user.name"
        placeholder="Name"
      />
      <userInput 
        v-model="user.email"
        placeholder="Email"
        :type="'email'"
      />
      <userInput
        v-model="user.password" 
        placeholder="Password"
        :type="'password'"
      />
      <userInput
        v-model="user.repeatPassword" 
        placeholder="Repeat password"
        :type="'password'"
      />
    </form>
      <LoginBtn
        class="reg-btn" 
        :labelButton="'Registration'"
      />
  </div>
</template>


<script>
import userInput from '../components/ui/userInput.vue'
import LoginBtn from '../components/ui/LoginBtn.vue'
export default {
  name: 'ResetPage',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  components: {
    userInput,
    LoginBtn
  }
}

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    min-height: auto;
    background-color: #eeeeee;
    box-shadow: 8px 10px 12px 0px rgba(3, 5, 7, 0.2);
    border: 1px solid rgba(128, 128, 128, 0.2784313725);
    border-radius: 4%;
    .reg-btn {
      margin-bottom: 2vh;
    }
  }

</style>
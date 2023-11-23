<template>
  <div class="container">
    <div class="container-signup">
      <form>
        <user-input
          v-model="user.name"
          placeholder="Name"
        />
        <user-input 
          v-model="user.email"
          placeholder="Email"
          :type="'email'"
        />
        <user-input
          v-model="user.password" 
          placeholder="Password"
          :type="'password'"
        />
        <user-input
          v-model="user.repeatPassword" 
          placeholder="Repeat password"
          :type="'password'"
        />
      </form>
      <login-btn
        @click="addUser"
        class="reg-btn" 
        :labelButton="'Registration'"
      >
        Registration
      </login-btn>
    </div>
  </div>

</template>


<script>
import UserInput from '../components/ui/UserInput.vue'
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
  methods: {
    addUser() {
      this.$store.commit('SET_NAME', this.name)
    }
  },
  components: {
    UserInput,
    LoginBtn
  }
}

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    .container-signup {
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
      @media (max-width: 767px) {
        width: 390px;
      }
      @media (max-width: 400px) {
        width: 366px;
      }
      .reg-btn {
        margin-bottom: 2vh;
      }
    }
  }
 

</style>
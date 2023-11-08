<template>
  <div class="container">
    <form>
      <user-input 
      placeholder="E-mail"
      />
    </form>
    <login-btn 
      class="res-btn"
      :labelButton="'Reset password'"
    />
  </div>
</template>


<script>
import UserInput from '../components/ui/UserInput.vue'
import LoginBtn from '../components/ui/LoginBtn.vue'
export default {
  name: 'ResetPage',
  components: {
    UserInput, LoginBtn
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
    .res-btn {
      margin-bottom: 2vh;
    }
  }

</style>
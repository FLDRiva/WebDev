<template>
  <div class="container">
    <main class="user-profile">
      <section class="user-profile__1">
        <img class="us-avatar" src="../assets/images/avatar_test.jpg">
        <h2>{{ user1.name }}</h2>
        <p>{{ user1.mail }}</p>
        <LoginBtn :label-button="'Edit Profile'"/>
        
      </section>
      <section class="user_profile__2">
        <h2>My profile setting</h2>
        <p>Please,edit your details below</p>
        <nav class="user-hold">
          <UserInput 
            :placeholder="'Password'"
            :type="'password'"
            :required="true"
          />
          <UserInput 
            :placeholder="'Repeat Password'"
            :type="'password'"
            :required="true"
          />
          <UserInput
            :type="'date'"
            :required="false"
          />
          <userTextArea 
            :cols="10"
            :rows="10"
          />
        </nav>
      </section>
    </main>
  </div>
</template>


<script>
import LoginBtn from '../components/ui/LoginBtn.vue'
import UserInput from '../components/ui/userInput.vue'
import userTextArea from '@/components/ui/userTextArea.vue'
export default {
    name: 'userProfile',
    data() {
      return {
        user1: {
          name: 'Ivan',
          mail: 'ivanov@gmail.com'
        },
      }
    },
    components: {
      LoginBtn,
      UserInput,
      userTextArea
    }
}

</script>


<style lang="scss" scoped>
  .container{
    display: flex;
    justify-content: center;
    min-width: 80vw;
    min-height: 80vh;
    background-color: #eeeeee;
    box-shadow: 8px 10px 12px 0px rgba(3, 5, 7, 0.2);
    border: 1px solid #80808047;
    border-radius: 4%;
    .user-profile {
      display: flex;
      gap: 25vw;
      margin-top: 5vh;
      .user-profile__1 {
        display: flex;
        flex-direction: column;
        .us-avatar {
          max-width: 10vw;
          max-height: 15vh;
          border-radius: 56%;
        }
      }
      .user_profile__2 {
        display: flex;
        flex-direction: column;
        .user-hold {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }


</style>
<template>
  <div class="container">
    <main class="user-profile">
      <section class="user-profile__1">
        <img class="us-avatar" src="../assets/images/avatar_test.jpg">
        <div class="user__text">
          <h2 class="user__text">{{ changeName }}</h2>
          <p class="user__text">{{ changeMail }}</p>
        </div>
        <form @submit.prevent="addUserInfo">
          <span class="user__text">
            {{ user1.bio }}
          </span>
          <p class="user__text">
            {{ user1.date }}
          </p>
        </form>
        <LoginBtn
          :label-button="'Edit Profile'"
        />
      </section>
      <section class="user_profile__2">
        <h2 class="user__text">My profile setting</h2>
        <p class="user__text">Please,edit your details below</p>
        <nav class="user-hold">
          <UserInput
            v-model="contentPassword"
            :placeholder="'Password'"
            :type="'password'"
            :required="true"
          />
          <UserInput 
            v-model="contentRepeatPassword"
            :placeholder="'Repeat Password'"
            :type="'password'"
            :required="true"
          />
          <UserInput
            v-model="contentDateUsers"
            class="user__text"
            :placeholder="'Date of Brith'"
            :type="'date'"
            :required="false"
          />
          <userTextArea
            v-model="contentBio"
            class="text__area"
            :cols="61"
            :rows="10"
          />
          <LoginBtn
            @click="addUserInfo"
            :label-button="'Confim change'"
          />
          
        </nav>
      </section>
    </main>
  </div>
</template>


<script>
import LoginBtn from '../components/ui/LoginBtn.vue'
import UserInput from '../components/ui/UserInput.vue'
import userTextArea from '@/components/ui/UserTextArea.vue'
export default {
    name: 'userProfile',
    data() {
      return {
        user1: {
          bio: '',
          date: '',
        },
        contentPassword: '',
        contentRepeatPassword: '',
        contentBio: '',
        contentDateUsers: ''
        
      }
    },
    mounted: {
      
    },
    computed: {
      changeName() {
        return this.$store.getters.NAME
      },
      changeMail() {
        return this.$store.getters.MAIL
      }
    },
    methods: {
      addUserInfo() {
        this.$store.commit('SET_DATE', this.contentDateUsers)
        this.$store.commit('SET_INFO', this.contentBio)
        this.user1.bio = this.$store.getters.INFO;
        this.user1.date = this.$store.getters.DATE;
      },
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
    @media (max-width: 767px) {
      width: 390px;
      flex-direction: column;
      overflow-x: hidden;
    }
    .user-profile {
      display: flex;
      min-width: 1300px;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1367px) {
        min-width: 1000px;
      }
      @media (max-width: 1024px) {
        min-width: 800px;
      }
      @media (max-width: 767px) {
        min-width: 353px;
        flex-direction: column;
        align-items: center;
      }
      @media (max-width: 400px) {
        width: 366px;
      }
      .user__text {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        font-size: 16px;
      }
      .user-profile__1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 450px;
        gap: 1vh;
        @media (max-width: 767px) {
          min-height: 212px;
          margin-top: 1vh;
          align-items: center;
        }
        .us-avatar {
          max-width: 10vw;
          max-height: 15vh;
          border-radius: 56%;
          @media (max-width: 767px) {
            width: 50px;
            height: 50px;
          }
        }
      }
      .user_profile__2 {
        display: flex;
        flex-direction: column;
        @media (max-width: 767px) {
          align-items: center;
        }
        .user-hold {
          display: flex;
          flex-direction: column;
          @media (max-width: 767px) {
            align-items: center;
          }
          .text__area {
            @media (max-width: 767px) {
              width: 370px;
            }
          }
        }
      }
    }
  }


</style>
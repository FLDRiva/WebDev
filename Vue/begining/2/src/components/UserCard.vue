<template>
  <div class="container">
    <!-- <div class="user-card">
      <h1>Научу зарабатывать от 50 000р. в час</h1>
      <div class="main-information flex">
        <img src="../assets/images/коуч.jpg" width="500px">
        <div class="info">
          <h2>{{ getAuthorFullName }}</h2>
          <strong>Бизнес-коуч</strong>
          <ul class="list">
            <li>Учу делать РЕАЛЬНЫЕ бабки, на себя просто не хватило времени</li>
            <li>НЕ знаю, что такое "Успешный Успех", но знаю, что нужно ТЕБЕ!</li>
            <li>Пообещал, что побреюсь, когда кого-нибудь ОБМАНУ.</li>
          </ul>
        </div>
      </div>
      <p>Участников: {{ users.length }}</p>
      <ul>
        <li
        v-for="(user, index) in users"
        :key="index"
        >
        {{ `${index + 1} ${getFullName(user)}` }}  
        </li>
      </ul>
      <button type="button" @click="currentPage--">
        Пред.
      </button>
      <button 
      v-for="page in pages"
      :key="page"
      type="button"
      @click="currentPage = page"
      >
        {{ page }}
      </button>
      <button type="button" @click="currentPage++">
        След.
      </button>
      <p>Страница {{ currentPage }} из {{ pages }}</p>
    </div> -->
    <DzCard />
  </div>
</template>

<script>
import DzCard from '@/components/DzCard.vue'
export default {
    data() {
        return {
            firstName: 'Игнатий',
            secondName: 'Иларионович',
            lastName: 'Богатов',
            users: [
                {
                    firstName: 'Ivan',
                    secondName: 'Ivanovich',
                    lastName: 'Ivanov'
                },
                {
                    firstName: 'Ivan',
                    secondName: 'Ivanovich',
                    lastName: 'Ivanov'
                },
                {
                    firstName: 'Ivan',
                    secondName: 'Ivanovich',
                    lastName: 'Ivanov'
                },
            ],
            pages: 3,
            currentPage: 1
        };
    },
    comments: {
        DzCard,
    },
    computed: {
        getAuthorFullName() {
            return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase();
        }
    },
    methods: {
        getFullName(user) {
            return `${user.firstName} ${user.secondName} ${user.lastName}`;
        },
        loadUsers(page) {
            console.log(`Загрузка пользователей страница: ${page}`);
        }
    },
    // Следит за изменениями наших функций
    watch: {
        currentPage(page) {
            this.loadUsers(page);
        }
    },
    components: { DzCard }
}

</script>

<style lang="scss" scoped>
  .user-card {
    margin-top: 40px;
  }
  .info {
    margin-left: 50px;
  }
  h2 {
    margin-bottom: 14px;
  }
</style>
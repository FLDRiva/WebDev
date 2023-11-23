//TODO МОДАЛКА ПОД МОБИЛКУ
//TODO ДОБАВИТЬ ИКОНКИ И РАЗОБРАТЬСЯ С ЦВЕТОМ

<template>
  <div id="app">
    <header>
      <my-header />
    </header>
    <div class="container">
      <router-view />
    </div> 
    <footer>
      <my-footer />
    </footer>
  </div>
</template>

<script>
import MyHeader from '../src/components/ui/MyHeader.vue'
import MyFooter from '../src/components/ui/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
  },

}
</script>

<style lang="scss" scoped>
@import 'vuetify/dist/vuetify.min.css';
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header, footer {
    min-width: 100vw;
    background-color: #333;
    color: #e5e5e5;
  }
}


</style>

<template>
  <div>
    <h1>Я найду тебя!</h1>
    <input type="text" @input="searchText = $event.target.value">
    <p >
    Всего имен: {{ userName.length }}, совпадений найденно: {{ getFiltered.length }}
    </p>
    <ul>
      <li 
      v-for="(use, index) in getFiltered"
      :key="index"
      >
      {{ use }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'dzCard',
  data() {
    return {
      searchText: '',
      userName: ['Василий', 'Петр', 'Данил', 'Григорий']
    }
  },
  computed: {
    getFiltered() {
      return this.userName.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }
}
</script>
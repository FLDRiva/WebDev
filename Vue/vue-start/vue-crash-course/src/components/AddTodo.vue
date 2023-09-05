<template>
  <!-- prevent - позволяет не перезагружать форму -->
  <form @submit.prevent="onSumbit">
    <!-- преобразуем поле title в модель -->
    <input type="text" v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      onSumbit() {
        console.log('Submit', this.title);
        if (this.title.trim()) {
          const newTodo = {
            id: Date.now(),
            title: this.title,
            completed: false
          }

          this.$emit('add-todo', newTodo)
          this.title = ''
        }
      }
    }
  }
</script>

<style>
  form {
    display: flex;
    justify-content: center;
  }
  input {
    width: 400px;
  }
</style>
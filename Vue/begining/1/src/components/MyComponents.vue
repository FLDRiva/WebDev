<template>
  <div class="root">
    <label>
      Введите email:
      <input type="email" 
      :value="email"
      @input="emailInput($event.target.value)"
      />
    </label>
    <label>
      Введите пароль:
      <input type="password" 
      :value="password"
      @input="passwordInput($event.target.value)"
      />
    </label>

  </div>
</template>

<script>

export default {
  name: 'MyComponents',
  data() {
    return {
      email: 'example@gmail.com',
      password: '123123'
    }
  },
  methods: {
    emailInput(value) {
      this.email = value 
    },
    passwordInput(value) {
      this.password = value 
    },
  }
}

</script>
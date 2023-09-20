<template>

  <div class="product-card">
    <img
    :src="imgUrl"
    width="300px"
    >
    <div class="product-card__info">
      <h2>{{ title }}</h2>
      <p class="price">{{ price }}.p</p>
      <p class="count">Доступно для доставки: {{ count }}шт.</p>
      <button type="button" @click="addToBasket">Добавить в крозину</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      validator(value) {
        return value.lenght < 50
      }
    },
    price: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WMbAIwc8MU0JGhhwvGDkUYibT39d-F_myg&usqp=CAU'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToBasket() {
      this.$emit('addToBasket')
    }
  } 
}
</script>

<style lang="scss" scoped>
li {
  margin-right: 20px;
}
.top-information {
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
  margin-bottom: 22px;
}
</style>

<template>
  <div class="product-list">
    <h1>Письменные столы</h1>
    <MyInput v-model="searchText"/>
    {{ searchText }}
    <button>
      Найти
    </button>
    <ul class="list-default flex">
      <li
      v-for="(produc, index) in products"
      :key="index"
      >
        <ProductCard 
          :title="produc.title"
          :price="produc.price"
          :imgUrl="produc.imgUrl"
          :count="produc.count"
          @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
  </div>


</template>

<script>
import ProductCard from './ProductCard'
import MyInput from './MyInput.vue'
export default {
  name: 'ProductList',
  components: { ProductCard, MyInput},
  data() {
    return {
      searchText: '',
      products: [
        {
          title: 'Стол Jim',
          price: 19999,
          imgUrl: 'https://hoff.ru/upload/hoff_resize/hoff-images/172/376/2eccf9c77fecdd356cd65c7d8246023b.jpg/1500x1000_85.jpeg',
          count: 30
        },
        {
          title: 'Стол Monako',
          price: 17199,
          imgUrl: 'https://hoff.ru/upload/iblock/a58/a58d21b373490f7bf3f217274333c3b0.jpg',
          count: 20
        },
        {
          title: 'Стол с двумя ящиками Кварт MD 768',
          price: 10999,
          imgUrl: 'https://hoff.ru/upload/iblock/1cc/1ccb33b50e3e9cfa08629bf455e41855.jpg',
          count: 23
        }
      ]
    }
  },
  methods: {
    addToBasket(index) {
      console.log(index);
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

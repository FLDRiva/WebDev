<template>
  <div id="app">
    <MyComponents />
    <BasketItem />
  </div>
</template>

<script>
import MyComponents from '@/components/MyComponents.vue'
import BasketItem from '@/components/Basket-item.vue'

export default {
  name: 'App',
  components: {
    MyComponents,
    BasketItem
  }
}
</script>



<template>
  <div class="basket">
    <p>Выберите кол-во продуктов</p>

    <button type="button" @click="decreaseCount">
      -
    </button>
    <input 
    type="number"
    :value="count"
    :min="minCount"
    :max="maxCount"
    >
    <button type="button" @click="addCount">
      +
    </button>
  </div>
  
</template>

<script>
export default {
  name: 'Basket-item',
  data() {
    return {
      count: 1,
      minCount: 1,
      maxCount: 10
    } 
  },
  methods: {
    decreaseCount() {
      if (this.count > this.maxCount) {
        this.count--
      }
    },
    addCount() {
      if (this.count < this.minCount) {
        this.count++
      }
    }
  }
}

</script>
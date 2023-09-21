<template>
  <div class="container">
    <div class="one_operations">
      <input
      type="text"
      placeholder="0"
      v-model="result"
      @keyup.enter="calc()"
      >
      <button
      class="cell num"
      @click="input(num)"
      v-for="num in numbers"
      :key="num"
      >
      {{ num }}
      </button>
      <button
      class="cell op"
      v-for="op in operations"
      :key="op"
      @click="input(op)"
      >
      {{ op }}
      </button>
      <button class="cell op" @click="reset()">R</button>
      <button class="cell op" @click="calc()">=</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OneCalc',
  data() {
    return {
      result: '',
      numbers: [1,2,3,4,5,6,7,8,9,0],
      operations: ['+','-','*','/']
    }
  },
  methods: {
    calc() {
      this.result = eval(this.result)
    },
    input(char) {
      this.result = this.result.toString()
      this.result+=char
    },
    reset() {
      this.result = ''
    }
  }
}

</script>

<style lang="scss" scoped>
.one_operations, input{
  display: flex;                       
  flex-wrap: wrap;  
  justify-content: space-around;
  width: 100%;
  .cell {
  flex: 33%;                       
  height: 50px;
  font-size: 18px;
  border: none;
  box-shadow: 0 3px 15px grey;
    .num {
    background-color: #243849;
    color: #fff;
    font-weight: 400;
    }
  }
}
.op {
  background-color: coral;
  color: #243849;
}
  
</style>
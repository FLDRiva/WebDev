<template>
  <input type="text" class="search" @input="$emit('change', $event.target.value)" >
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>

<style lang="scss" scoped>
input {
  height: 25px;
  margin-left: 40px;
}
</style>

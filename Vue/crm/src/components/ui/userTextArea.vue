<template>
  <div class="text-area">
    <textarea 
      :cols="cols"
      :rows="rows"
      v-model="areaText"
      :placeholder="placeholder"
      >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'userTextArea',
  data() {
    return {
      areaText: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    cols: {
      type: Number,
      default: 30
    },
    rows: {
      type: Number,
      default: 10
    }
  }
}

</script>

<style lang="scss" scoped>
.text-area {
  background-color: #e5e5e5;
  border: 1px solid #80808047;
  border-radius: 4%;
  box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
  transition: all .4s ease-in-out;
  width: 450px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
}


</style>
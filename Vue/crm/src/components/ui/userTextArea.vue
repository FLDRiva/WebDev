<template>
  <div class="text-area">
    <textarea 
      :cols="cols"
      :rows="rows"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :value="value"
      >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'userTextArea',
  data() {
    return {
      areaText: this.value
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
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
    },
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
  margin-top: 2vh;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
  textarea {
    resize: none;
    &:focus,:hover {
      outline: none;
      border: none;
    }
  }
}


</style>
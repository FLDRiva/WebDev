<template>
<div class="container-input">
    <div class="login-input"> 
    <input
      maxlength="50"
      minlength="1"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    value : {
      type: String,
      default: ''
    }
  }
}


</script>


<style lang="scss" scoped>
  .container-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  .login-input {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background-color: #e5e5e5;
    border: 1px solid #80808047;
    border-radius: 4%;
    box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
    transition: all .4s ease-in-out;
    width: 380px;
    @media (max-width: 767px) {
      width: 360px;
    }
    @media (max-width: 400px) {
      width: 325px;
    }
    input {
      flex-grow: 2;
      width: 90%;
      outline: none;
      border: none;
      background-color: #e5e5e5;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
      font-size: 16px;
    }
  }
}

</style>
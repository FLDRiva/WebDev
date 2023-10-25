<template>
  <div class="v-add-container">
    <div class="v-add-item">
      <slot name="add-item">
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="text">
        <div class="v-modal-btn">
          <button @click="close">Add order</button>
          <button @click="close">Close</button>
        </div>
      </slot>
    </div>

  </div>



</template>

<script>
// import Input from '../components/ui/standartInput.vue'
// import Button from '../components/ui/LoginBtn.vue'
export default {
  data() {
    return {

    }
  },
  name: 'addItem',
  methods: {
    close() {
      this.$emit('close')
    }
  },

}

</script>


<style lang="scss" scoped>
.v-add-container {
  width: 33vw;
  .v-add-item {
    background: #b5b5b5;
    border: 1px solid rgba(128, 128, 128, 0.2784313725);
    border-radius: 4%;
    box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
    transition: all .4s ease-in-out;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vh;
  }
  input {
    padding: 15px;
    margin-top: 2vh;
    background-color: #e5e5e5;
    border: 1px solid #80808047;
    border-radius: 4%;
    box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
    outline: none;
    border: none;
    transition: all .4s ease-in-out;
    width: 450px;
  }
  .v-modal-btn {
    display: flex;
  }
  button {
    background: #e5e5e5;
    outline: none;
    min-width: 209px;
    height: 43px;
    border-radius: 5%;
    margin-top: 2vh;
    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    color: #7d7a7a;
    border: 2px solid #80808047;
    box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
    &:hover {
      border: 2px solid #9b9292;
      border-color: #9b9292;
      background-color: #4b4545;
    }
  }
}



</style>
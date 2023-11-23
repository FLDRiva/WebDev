<template>
  <base-modal @close="closeModal">
    <div class="modal-container">
      <input type="text"
        :placeholder="'name'"
        v-model="newItem.name"
      >
      <input type="text"
        :placeholder="'compound'"
        v-model="newItem.compound"
      >
      <input type="text"
        :placeholder="'availability'"
        v-model="newItem.availability"
      >
      <input type="text"
        :placeholder="'price'"
        v-model="newItem.price"
      >
      <input type="date"
        v-model="newItem.date"
      >
      <div class="modal-btn" v-if="!editMode"> 
        <button type="submit" @click="getItem">Add item</button>
      </div>
      <div class="modal-btn" v-if="editMode">
        <button type="submit" @click="changeItem">Change item</button>
      </div>
    </div>
    
  </base-modal>

</template>

<script>
import BaseModal from '../ui/BaseModal.vue'
import { mapActions } from "vuex";
export default {
  name: 'modalItem',
  components: {
    BaseModal,
  },
  data() {
    return {
      newItem: {
        name: '',
        compound: '',
        availability: '',
        price: '',
        date: new Date,
      },
    }
  },
  props: {
    item: {
      type: Object
    },
    editMode: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    this.newItem = this.item;
  },
  computed: {
  },
  methods: {
    ...mapActions(['postItem', 'putItem']),
    getItem() {
      this.postItem({
        id: +Math.random().toString().slice(2),
        name: this.newItem.name,
        compound: this.newItem.compound,
        availability: this.newItem.availability,
        price: this.newItem.price,
        date: this.newItem.date
      });
      this.closeModal();
    },
    closeModal() {
      this.$emit('close')
      this.name = this.compound = this.availability = this.price = this.date = null
    },
    changeItem() {
      this.putItem(this.newItem);
      this.closeModal();
    }
  },

}

</script>


<style lang="scss" scoped>
  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: 40px;
    input {
      padding: 15px;
      background-color: #e5e5e5;
      border: 1px solid #80808047;
      border-radius: 4%;
      box-shadow: 5px 6px 5px -4px rgba(5, 5, 5, 0.48);
      outline: none;
      border: none;
      transition: all .4s ease-in-out;
      width: 569px;
      @media (min-width: 320px) and (max-width: 430px) {
        width: 330px;
      }
    }
    .modal-btn {
      display: flex;
      justify-content: center;
      background: #e5e5e5;
      outline: none;
      min-width: 209px;
      height: 43px;
      border-radius: 5%;
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
<template>
  <div class="container">
    <div class="head-table">
      <addButton 
        @click="showModal"
        :label-button="'Add item'"
      />
      <Input 
        :type="'text'"
        :placeholder="'Search'"
        v-model="searchInput"
      />
      <addButton 
        @click="findItem"
        :label-button="'Find'"
      />
      <addButton 
        @click="returnItem"
        :label-button="'Clear'"
      />
    </div>
    <div class="v-modal-container">
      <modal 
        v-show="isModalVisible"
        @close="closeModal"
      />
    </div>
    <table>
      <tr>
        <th>Product Name</th>
        <th>Compound</th>
        <th>Availability</th>
        <th>Price</th>
        <th>Data</th>
      </tr>
      <tr v-for="itemName in items" :key="itemName.id">
        <td>{{ itemName.name }}</td>
        <td>{{ itemName.compound }}</td>
        <td>{{ itemName.availability }}</td>
        <td>{{ itemName.price }}</td>
        <td>{{ itemName.date }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import Input from '../components/ui/standartInput.vue'
import addButton from '../components/ui/LoginBtn.vue'
import modal from '../components/ui/modal.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'ProductList',
  data() {
    return {
      searchInput: '',
      items: [],
      originalItems: [],
      isModalVisible: false,
    }
  },
  computed: {
    ...mapGetters(['ITEM_NAME']), 
  },
  watch: {
    ITEM_NAME(value) {
      this.items = value;
      this.originalItems = value;
    },
  },
  methods: {
    ...mapActions(["updateItem"]),

    findItem() {
      const search = this.searchInput.toLowerCase();
      const result = this.items.filter((item) => {
        return item.compound.toLowerCase().includes(search) || item.name.toLowerCase().includes(search)
      });
      this.items = result;
    },
    returnItem() {
      this.items = this.originalItems
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  },
  components: {
    addButton, Input, modal
  },
  async mounted() {
    this.updateItem()
  }
}

</script>


<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  .head-table {
    display: flex;
    justify-content: space-around;
  }
  .v-modal-container {
    display: flex;
    justify-content: center;
    padding: 3vh;
  }
  table {
    height: 200px;
    background-color: #eeeeee;
    box-shadow: 8px 10px 12px 0px rgba(3, 5, 7, 0.2);
    border: 1px solid rgba(128, 128, 128, 0.2784313725);
    border-collapse: collapse;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 16px;
    table-layout: fixed;
    @media (max-width: 1367px) {
      width: 85%;
    }
    @media (max-width: 1024px) {
      width: 0%;
    }
    th {
      text-align: left;
      padding-left: 60px;
      border: 1px solid #dddddd;
      width: 180px;
    }
    td {
      text-align: center;
      border: 1px solid #dddddd;
      width: 180px;
    }
  }
}


</style>
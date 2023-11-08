<template>
  <div class="container">
    <div class="head-table">
      <add-button 
        @click="addNewItem"
        :label-button="'Add item'"
      />
      <Input 
        :type="'text'"
        :placeholder="'Search'"
        v-model="searchInput"
      />
      <add-button 
        @click="findItem"
        :label-button="'Find'"
      />
      <add-button 
        @click="returnItem"
        :label-button="'Clear'"
      />
    </div>
    <div class="v-modal-container">
      <create-modal 
        v-if="isModalVisible || isEditMode" 
        :editMode="isEditMode"
        :item="item"
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
        <td>
          <i @click="editModal(itemName)" class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </td>
        <td>
          <i @click="delItem(itemName)" class="fa fa-trash" aria-hidden="true"></i>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import Input from '../components/ui/StandartInput.vue'
import AddButton from '../components/ui/LoginBtn.vue'
import CreateModal from '../components/ui/CreateModal.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'ProductList',
  data() {
    return {
      searchInput: '',
      items: [],
      originalItems: [],
      isModalVisible: false,
      item: {},
      isEditMode: false,
      deleteItems: {},
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
    ...mapActions(["updateItem", 'removeItem']),

    findItem() {
      const search = this.searchInput.toLowerCase();
      const result = this.items.filter((item) => {
        return item.compound.toLowerCase().includes(search) || item.name.toLowerCase().includes(search)
      });
      this.items = result;
    },
    returnItem() {
      this.items = this.originalItems;
    },
    addNewItem() {
      this.isModalVisible = !this.isModalVisible;
      this.item = 
        {
          name: '',
          compound: '',
          availability: '',
          price: '',
          date: new Date,
        };
      this.isEditMode = false;
    },
    editModal(data) {
      this.isEditMode = true
      this.item = data
      // console.log(data);
    },
    closeModal() {
      this.isModalVisible = false
      this.isEditMode = false 
    },
    delItem() {
      this.items.forEach((elem) => {
        this.deleteItems = elem
      })
      this.removeItem(this.deleteItems)
    }
  },
  components: {
    AddButton, Input, CreateModal
  },
  async mounted() {
    this.updateItem();

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
      i {
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
    }
  }
}


</style>
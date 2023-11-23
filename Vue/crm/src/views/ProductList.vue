<template>
  <div class="container">
    <div class="head-table">
      <add-button
      @click="addNewItem"
      :label-button="'Add item'"
      >
      <div class="add-button-information">
        <i class="fa fa-plus" aria-hidden="true"></i>
        Add Item
      </div>
      </add-button>
      <Input 
        :type="'text'"
        :placeholder="'Search'"
        v-model="searchInput"
      />

      <select v-model="selectCategory">
        <option v-for="select in selectItem" :key="select.id">{{ select.category }}</option>
      </select>
    
      <add-button 
      @click="findSelect"
      :label-button="'Find'"
      >
      <div class="add-button-information">
        <i class="fa fa-hand-o-right" aria-hidden="true"></i>
        Find
      </div>
      </add-button>

      <add-button 
      @click="returnItem"
      :label-button="'Clear'"
      >
      <div class="add-button-information">
        <i class="fa fa-refresh" aria-hidden="true"></i>
        Clear
      </div>
      </add-button>

    </div>
      
    <div class="v-modal-container">
      <create-modal 
        v-if="isModalVisible || isEditMode" 
        :editMode="isEditMode"
        :item="item"
        @close="closeModal"

      />
    </div>
    <div class="product-table">
      <table>
        <tr>
          <th>Name</th>
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
            <i @click="editModal(itemName)" class="fa fa-pencil-square-o pencil" aria-hidden="true"></i>
          </td>
          <td>
            <i @click="delItem(itemName)" class="fa fa-trash trash" aria-hidden="true"></i>
          </td>
        </tr>
      </table>
    </div>
    
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
      selectItem: [
        {id: 1, category: 'Standart'},
        {id: 2, category: 'Name'},
        {id: 3, category: 'Compound'},
        {id: 4, category: 'Availability'},
        {id: 5, category: 'Price'}
      ],
      selectSearch: '',
      selectCategory: 0
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
    findSelect() {
      const search = this.searchInput.toLowerCase();
      const ser = this.items.filter(item => {
        if (this.selectCategory === 'Name') {
          return item.name.toLowerCase().includes(search) || item.name
        }
        if (this.selectCategory === 'Compound') {
          return item.compound.toLowerCase().includes(search)
        }
      });
      this.items = ser
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
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  .head-table {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (min-width: 320px) and (max-width: 430px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      height: 10vh;
    }
    select {
      background:transparent;
      border:none;
      width:20%;
      font-size:19px;
      z-index:2;
      padding:0 10px;
      position : relative;
      -webkit-appearance:none;
      -moz-appearance:none;
      appearance:none;
      &:hover{
        cursor:pointer;
      }
  }   
  }
    
    .add-button-information {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
  }
  .v-modal-container {
    display: flex;
    justify-content: center;
    padding: 3vh;
  }
  .product-table {
    display: flex;
    justify-content: center;
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
      @media (min-width: 320px) and (max-width: 430px) {
        margin-top: 55px;
        table-layout: fixed
      }
      th {
        text-align: center;
        border: 1px solid #dddddd;
        @media (min-width: 320px) and (max-width: 430px) {
          table-layout: fixed;
          // &:nth-child(5) {
          //   display: none;
          // }
        }
      }
      tr {
        vertical-align: top;
      }
      td {
        text-align: center;
        border: 1px solid #dddddd;
        &:nth-child(3), &:nth-child(4), &:nth-child(6), &:nth-child(7) {
          width: 5%;
          overflow-x: auto;
          vertical-align: top;
        }
        @media (max-width: 1024px) {
          &:nth-child(6), &:nth-child(7) {
            width: 3%;
          }
        }
        @media (min-width: 320px) and (max-width: 430px) {
          // &:nth-child(5) {
          //   display: none;
          // }
        }
        i {
          cursor: pointer;
        }
        .trash:hover {
          color: red;
        }
        .pencil:hover {
          color: blue;
        }
      }
    }
  }
} 



</style>
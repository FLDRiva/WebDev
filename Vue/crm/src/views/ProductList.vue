<template>
  <div class="container">
    <div class="head-table">
      <addButton 
        @click="$router.push({path: '/item/add'})"
        :label-button="'Add item'"
      />
      <Input 
        :type="'text'"
        :placeholder="'Search'"
        v-model="searchInput"
      />
      <addButton 
        @click="findItem(searchInput)"
        :label-button="'Find'"
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
      <tr v-for="itemName in NameProduct" :key="itemName.id">
        <td>{{ itemName.name }}</td>
        <td>{{ itemName.compound }}</td>
        <td>{{ itemName.availability }}</td>
        <td>{{ itemName.price }}</td>
        <td>{{ itemName.data }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import Input from '../components/ui/standartInput.vue'
import addButton from '../components/ui/LoginBtn.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'ProductList',
  data() {
    return {
      searchInput: '',
    }
  },
  computed: {
    NameProduct() {
      return this.$store.getters.ITEM_NAME
    },
    ...mapGetters(['SEARCH_ITEM']),
    
  },
  methods: {
    ...mapActions(["updateItem"]),
    ...mapActions(['GET_SEARCH_VALUE']),
    findItem(value) {
    this.GET_SEARCH_VALUE(value);
   },
  },
  components: {
    addButton, Input
  },
  async mounted() {
    this.updateItem
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
    margin-bottom: 2vh;
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
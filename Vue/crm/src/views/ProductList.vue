<template>
  <div class="container">
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
        <td>Yes</td>
        <td>{{ itemName.price }}</td>
        <td>{{ itemName.data }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: 'ProductList',
  
  computed: {
    NameProduct() {
      return this.$store.getters.ITEM_NAME
    },
  },
  methods: {

  },
  components: {

  }
}

</script>


<style lang="scss" scoped>
.container {
  display: flex;
  min-width: 100vw;
  table {
    width: 92%;
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
      // padding: 8px;
      border: 1px solid #dddddd;
      width: 180px;
    }
  }
}


</style>
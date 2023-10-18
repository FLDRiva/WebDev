<template>
  <div class="container">
    <table>
      <tr>
        <th>Product Name</th>
        <th>Compound</th>
        <th>Availability</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>Goat milk</td>
        <td>Alpine goat milk</td>
        <td>Yes</td>
        <td>0.5$</td>
      </tr>
      <tr>
        <td>Cottage cheese</td>
        <td>Goat milk <br> Bifidobacterium</td>
        <td>Yes</td>
        <td>0.5$</td>
      </tr>
      <tr>
        <td>Cheese with spices</td>
        <td>Goat milk <br> Bifidobacterium <br> Paprika and herbs</td>
        <td>Yes</td>
        <td>0.5$</td>
      </tr>
    </table>
  </div>




</template>


<script>


</script>


<style lang="scss" scoped>
.container {
  display: flex;
  min-width: 100vw;
  table {
    width: 92%;
    height: 650px;
    background-color: #eeeeee;
    box-shadow: 8px 10px 12px 0px rgba(3, 5, 7, 0.2);
    border: 1px solid rgba(128, 128, 128, 0.2784313725);
    border-collapse: collapse;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 16px;
    th {
      text-align: left;
      padding-left: 10px;
      border: 1px solid #dddddd;
    }
    td {
      text-align: center;
      // padding: 8px;
      border: 1px solid #dddddd;
    }
  }
}


</style>
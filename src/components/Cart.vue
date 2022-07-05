<template>
  <div>
    <h1>Warenkorb</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(pizza, idx) in cart" :key="idx">
        <td>{{ pizza.name }}</td>
        <td>{{ pizza.quantity  }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  computed: mapState(['cart'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

table {
  width:auto;
  border:1px solid black;
  margin-left:auto;
  margin-right:auto;
}

td {
  text-align:left;
}

a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}

</style>
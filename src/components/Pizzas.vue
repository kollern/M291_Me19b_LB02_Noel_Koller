<template>
  <div>
    <h1>Standard Pizzas bestellen</h1>
    <table>
      <tr v-for="(pizza, idx) in pizzas" :key="idx">
        <td>{{ pizza.name }}</td>
        <td>{{ pizza.ingredients }}</td>
        <td>{{ pizza.price.toFixed(2) }}</td>
        <td><a href="#" @click="addToCart(pizza)">Hinzufügen</a></td>
        <td><a href="#" @click="removeFromCart(pizza)">Entfernen</a></td>
      </tr>    
    </table>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Pizzas',
  computed: mapState(['pizzas']),
  methods: {
    addToCart(pizza) {
      this.$store.commit('addToCart', pizza);
    },
    removeFromCart(pizza) {
      this.$store.commit('removeFromCart', pizza);
    }
  },
  created() {
    this.$store.dispatch("loadPizzas")
  }
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
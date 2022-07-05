<template>
  <div>

    <Pizzas/>

    <Cart />

    <Checkout/>

  </div>
</template>

<script>

import Pizzas from '../components/Pizzas.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'

export default {
  components: {
    Pizzas,
    Cart,
    Checkout
  },
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

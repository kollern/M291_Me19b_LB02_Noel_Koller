<template>
  <div>
    <h2>Checkout</h2>
    Your total is CHF {{ cartTotal.toFixed(2) }}.
    <b-button variant="primary" v-show="cartTotal > 0" @click="checkout">Checkout</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      limitReached: false
    }
  },
  computed: 
    mapGetters(['cartTotal']),
  methods: {
    checkout() {
      if (this.cartTotal > 30) {
        alert('Bestellung erfolgreich abgeschickt!');
      } else {
        alert('Mindestbestellwert von CHF 30 nicht erreicht!');
      }
    }
  }
}
</script>


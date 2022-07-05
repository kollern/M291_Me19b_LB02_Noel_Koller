<template>
  <div>
    <h1>Pizza bestellen</h1>

    <p>Bitte wähle aus, was Du genau bestellen möchtest:</p>

    <p><router-link :to="{ name: 'detailorder', params: {content: 'standard' }}">Standard Pizza bestellen</router-link></p>

    <p><router-link :to="{ name: 'detailorder', params: {content: 'custom' }}">Pizza selber zusammenstellen</router-link></p>

    <SimpleNav/>

  </div>
</template>

<script>

import SimpleNav from '../components/SimpleNav.vue'

export default {
  components: {
    SimpleNav
  }
}

</script>

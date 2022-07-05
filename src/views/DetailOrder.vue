<template>
  <div>
    <h1>Pizza bestellen</h1>
        
    <StandardPizzaPage v-if="$route.params.content == 'standard'"/>

    <CustomPizzaPage v-else-if="$route.params.content == 'custom'"/>

    <p v-else>Information welche Art der Pizza geordert werden soll, wurde nicht übergeben. Bitte verwende die obere Navigation.</p>

    <SimpleNav/>

  </div>
</template>
<script>

import StandardPizzaPage from './StandardPizzaPage.vue'
import CustomPizzaPage from './CustomPizzaPage.vue'
import SimpleNav from '../components/SimpleNav.vue'

export default {
  components: {
    StandardPizzaPage,
    CustomPizzaPage,
    SimpleNav
  }
}
</script>

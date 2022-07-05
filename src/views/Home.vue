<template>
  <div>
    <h1 v-if="isRed" class="red">{{ msg }}</h1>
    <h1 v-else>{{ msg }}</h1>
    <p>Bitte verwende die obenstehende Navigation um eine Pizza zu bestellen oder weitere Informationen aufzurufen.</p>
    <p><a href="#" @click="isRed=!isRed">Auf dieser Seite kannst Du sonst nur die Farbe des Titels ändern</a></p>
  
    <SimpleNav/>

  </div> 
</template>

<script>

import SimpleNav from '../components/SimpleNav.vue'

export default {
  data() {
    return {
      msg: "Willkommen auf der Pizza Page",
      isRed: true,
    }
  }, 
  components: {
    SimpleNav
  }
}

</script>


<style lang="scss" scoped>
.red {
  color: red;
}
</style>
<template>
  <div class="about">
    <h1>Diese Vue App stammt von {{$route.params.user}}</h1>
    <p v-text="intro"></p>
    <ol v-html="taskList"></ol>

    <SimpleNav/>
    
  </div>
</template>

<script>

import SimpleNav from '../components/SimpleNav.vue'

export default {
  data() {
    return {
      intro: "Im Informatikprojekt sollen diese Aufgaben gelöst werden:",
      taskList: "<li class='numbered'>Mindestens vier der folgenden Vue-Direktiven werden sinnvoll angewendet: v-text, v-html, v-bind, v-if, v-else-if, v-else.</li>"
      + "<li class='numbered'>Mindestens einmal wird die Vue-Direktive sinnvoll angewendet: v-for.</li>"
      + "<li class='numbered'>Mindestens zwei Arten der folgenden Datenverareitung werden sinnvoll angewendet: Methods, Watcher, Computed Props.</li>"
      + "<li class='numbered'>Mindestens einmal wird ein Advanced Routing (Routing mit Parametern) sinnvoll angewendet: VueRouter, router-view, router-link.</li>"
      + "<li class='numbered'>Mindestens einmal wird ein State-Management mit Vuex sinnvoll angewendet: getters, mutations.</li>"
      + "<li class='numbered'>Mindestens einmal werden die Dateneingaben sinnvoll validiert.</li>"
      + "<li class='numbered'>Mindestens einmal ein Vue-Client kommuniziert mit einem Server und verarbeitet/gibt aus sinnvoll dessen Daten.</li>"
      + "<li class='numbered'>Der Programmcode ist in der/den Applikation(en) syntaktisch und semantisch korrekt programmiert.</li>"
      + "<li class='numbered'>Der/die Applikation(en) weisen einen Bezug zur Praxis auf.</li>"
      + "<li class='numbered'>Die selbst erstellte(n) Applikation(en) müssen erkennbare Eigenleistungen aufweisen.</li>"
    }
  },
  components: {
    SimpleNav
  }
}
</script>

<style lang="scss" scoped>

ol {
  display: block;
  list-style-type: decimal;
}

</style>
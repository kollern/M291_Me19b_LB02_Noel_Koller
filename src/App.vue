<template>
  <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
  <div id="app">
    <div id="logo"><img class="logo" alt="Pizza logo" src="./assets/pizza.jpg"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/order">Order</router-link> |
      <!-- Passing Route Parameters -->
      <router-link :to="{ name: 'about', params: { user: 'Noel Koller'}}">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>


<template>
  <router-link to="/">
    <h1>MyAnimeList</h1>
  </router-link>
  <navbarComponent/>  
  <HomeView/>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbarComponent from './components/NavbarComponent.vue'
</script>

<style scoped>
a {
  /* color: black; */
  text-decoration: none;
}
</style>

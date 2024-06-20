<template>
  <div class="topAnime">
    <h1>Top anime</h1>
    <div class="card" v-for="anime in animes"
        :key="anime.mal_id">
      <CardComponent
        :animeInfo="anime"
      />
    </div>
  </div>
</template>

<script setup>
import CardComponent from '../components/AnimeCardComponent.vue';
import { onMounted, ref } from 'vue';

const animes = ref([]);

onMounted(() => {
  const url = 'https://api.jikan.moe/v4/top/anime';
  const options = {
    method: 'GET',
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      animes.value = data.data;
    })
    .catch((error) => console.error('problem fetching the anime', error));
});
</script>

<style scoped></style>

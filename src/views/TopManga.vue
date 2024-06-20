<template>
    <div class="topMangas">
        <h1>Top manga</h1>
        <ul>
            <li v-for="manga in mangas"
            :key="manga.mal_id">
                <MangaCardComponent 
                :animeInfo = "manga"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import MangaCardComponent from "../components/MangaCardComponent.vue";
import { onMounted, ref } from "vue";

const mangas = ref([])


onMounted(() => {
    const url = 'https://api.jikan.moe/v4/top/manga'
    const options = {
        method: 'GET'
    };

    fetch(url, options)
        .then((response) => response.json()) 
        .then((data) => {
            mangas.value = data.data;   
        })
    .catch((error) => console.error('problem fetching the anime', error));

})

</script>

<style scoped>
li {
    list-style-type: none;
}
</style>
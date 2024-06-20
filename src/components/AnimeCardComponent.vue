<template>
    <div class="cardContainer">
        <div class="rank">{{ animeInfo.rank }}</div>
        <div class="infoCardBlock">
            <img :src="animeInfo.images.jpg.image_url">
            <div>
                <h2>{{ animeInfo.title }}</h2>
                <div>{{ animeInfo.type }}</div>
                <div>{{ animeInfo.episodes }} episodes ({{ animeInfo.status }})</div>
                <span>{{ animeInfo.aired.prop.from.month }} / </span>
                <span>{{ animeInfo.aired.prop.from.year }}</span>
            </div>
        </div>  
        <div></div>
        <span class="rate">{{ animeInfo.score }}</span>
    </div>
</template>

<script setup>
defineProps ({
    animeInfo: Object
})
</script>

<style scoped>
h3 {
    color: black;
}

h2 {
    font-size: 1.1rem;
    text-align: left;
}

img {
    width: 100px ;
}

.rate {
    font-weight: bold;
}

.rank {
    font-size: 1.5rem;
    font-weight: bold;
}

.cardContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-block-end: 1rem;
    background-color: grey;
    align-items: center;
    padding: .3rem;
    border-radius: 15px;
}

.infoCardBlock {
    display: flex;
    gap: 1rem;

}
</style>
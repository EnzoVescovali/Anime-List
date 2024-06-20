<template>
<header>
    <nav>
        <ul>
            <router-link to="/top_anime">Top anime</router-link>
            <router-link to="/top_manga">Top manga</router-link>
            <router-link to="/profile">Profile</router-link>
        </ul>
        <input type="text">
    </nav>
</header>
</template>

<script setup>

</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
}

ul > *:not(:last-child) {
    margin-inline-end: 1rem;
}

a {
    color: black;
    text-decoration: none;
}
</style>
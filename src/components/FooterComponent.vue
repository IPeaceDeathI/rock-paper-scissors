<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const gameType = ref(useScoreStore().gameType)
</script>

<template>
    <RouterView />

    <footer>
        <nav>
            <RouterLink @click="gameType = 'ORIGINAL'" class="link" to="/">ОРИГИНАЛ</RouterLink>
            <RouterLink @click="gameType = 'BONUS'" class="link" to="/bonus">БОНУС</RouterLink>
            <RouterLink @click="gameType = 'ORIGINAL'" class="link" to="/rules">ПРАВИЛА</RouterLink>
        </nav>
    </footer>
</template>

<style scoped>
footer {
    position: fixed;
    bottom: 1em;
    right: 1em;
}
nav {
    display: flex;
    flex-direction: column;
}
.link {
    font-weight: 700;
    text-align: center;
    border: 2px solid rgb(0, 144, 96);
    background: -webkit-linear-gradient(45deg, #0b01b8, #00ff95 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 5px;
    padding: 0.5em 1em;
    margin: 0.5em;
}
</style>

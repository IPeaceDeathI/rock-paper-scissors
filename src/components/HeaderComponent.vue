<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { computed, toRefs } from 'vue'

const store = useScoreStore()
const { score, gameType, incrementScore, decrementScore, doubleScore } = toRefs(store)

const text = computed<string>(() => {
    if (gameType.value == 'BONUS') {
        return 'ROCK<br>PAPER<br>SCISSORS<br>LIZARD<br>SPOCK'
    } else return 'ROCK<br>PAPER<br>SCISSORS'
})
</script>

<template>
    <v-card rounded="lg" variant="outlined" class="container">
        <div class="wrapper">
            <div class="name" v-html="text"></div>
            <v-sheet :elevation="24" rounded="lg" class="counter"
                >СЧЕТ
                <div class="score">{{ score }}</div></v-sheet
            >
        </div>
    </v-card>
</template>

<style scoped>
.container {
    width: 50%;
    min-width: 150px;
    min-height: 100px;
    color: #fff;
    padding: 1rem;
    margin: 0 auto;
    font-size: x-large;
    font-weight: bold;
    border: solid 3px #606e85;
}

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.name {
    min-width: 65px;
    background: -webkit-linear-gradient(45deg, #0b01b8, #00ff95 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.counter {
    height: 100%;
    min-width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: medium;
    font-weight: 700;
    color: #0d3cc1;
    padding: 10px 0;
    margin: auto 0;
}
.score {
    color: #3a4262;
    font-size: xx-large;
    line-height: 1.1;
}
@media all and (max-width: 535px) {
    .wrapper {
        gap: 1em;
        flex-direction: column;
    }
}
</style>

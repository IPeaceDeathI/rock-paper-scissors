<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { computed, ref, toRefs } from 'vue'
import OriginalGame from './OriginalGame.vue'
import BonusGame from './BonusGame.vue'

const { gameType } = toRefs(useScoreStore())
const game = computed<string>(() => {
    if (gameType.value == 'BONUS') {
        return 'BonusGame'
    } else return 'OriginalGame'
})
</script>

<template>
    <main>
        <keep-alive>
            <component :is="game"></component>
        </keep-alive>
    </main>
</template>

<style scoped>
main {
    height: calc(100vh - 64px - 100px - 20px);
}
</style>

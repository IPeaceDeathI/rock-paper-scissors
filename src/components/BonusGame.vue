<script setup lang="ts">
import { computed, ref } from 'vue'
import ButtonComponent from './ButtonComponent.vue'
import { useScoreStore } from '@/stores/score'
const store = useScoreStore()

const isRoundOver = ref(false)
const usersChoise = ref('')

const roundOver = function (value: boolean, btnType: string) {
    isRoundOver.value = value
    usersChoise.value = btnType
}
const resultAnswer = computed<string>(() => {
    if (store.getLastResult == 'win') return 'ВЫ ПОБЕДИЛИ'
    if (store.getLastResult == 'lose') return 'ВЫ ПРОИГРАЛИ'
    else return 'НИЧЬЯ'
})
const restartRound = function () {
    isRoundOver.value = false
}
</script>

<template>
    <div v-if="!isRoundOver" class="container">
        <div class="connect spock-scissors" />
        <ButtonComponent
            @round-over="roundOver"
            :game-type="'bonus'"
            :btn-type="'scissors bonus'"
        />

        <div class="connect scissors-paper" />
        <ButtonComponent @round-over="roundOver" :game-type="'bonus'" :btn-type="'paper bonus'" />

        <div class="connect paper-rock" />
        <ButtonComponent @round-over="roundOver" :game-type="'bonus'" :btn-type="'rock bonus'" />

        <div class="connect rock-lizard" />
        <ButtonComponent @round-over="roundOver" :game-type="'bonus'" :btn-type="'lizard bonus'" />

        <div class="connect lizard-spock" />
        <ButtonComponent @round-over="roundOver" :game-type="'bonus'" :btn-type="'spock bonus'" />
    </div>
    <div class="expand" v-else>
        <VExpandTransition>
            <div class="container-res">
                <div class="col user-choise">
                    <div class="text">ВЫ ВЫБРАЛИ</div>
                    <ButtonComponent :game-type="'bonus'" :btn-user="usersChoise" />
                </div>
                <div class="result">
                    {{ resultAnswer }}
                    <v-btn class="res-btn" text="играть снова" @click="restartRound" />
                </div>
                <div class="col computer-choise">
                    <div class="text">КОМПЬЮТЕР<br />ВЫБРАЛ</div>
                    <ButtonComponent
                        :game-type="'bonus'"
                        :btn-computer="store.computer.toLowerCase()"
                    />
                </div>
            </div>
        </VExpandTransition>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    max-width: 1200px;
    height: calc(100vh - 64px - 100px - 20px);
}
.connect {
    z-index: -1;
    background-color: #101b2c;
    width: 100px;
    height: 20px;
    position: absolute;
}
.spock-scissors {
    top: 34%;
    left: 42%;
    transform: translate(-50%, -50%) rotate(-46deg);
}
.scissors-paper {
    top: 34%;
    left: 58%;
    transform: translate(-50%, -50%) rotate(46deg);
}
.paper-rock {
    top: 60%;
    left: 62%;
    transform: translate(-50%, -50%) rotate(-67deg);
}
.rock-lizard {
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.lizard-spock {
    top: 60%;
    left: 38%;
    transform: translate(-50%, -50%) rotate(67deg);
}
.container-res {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.expand {
    height: 70%;
    width: 100%;
}
.col {
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: #fff;
    text-align: center;
}
.text {
    padding-bottom: 2em;
}
.res-btn {
    margin-top: 1em;
    color: #6476c9;
}
.result {
    width: 20%;
    font-size: 2em;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: auto 0;
}
@media screen and (max-width: 870px) {
    .connect {
        display: none;
    }
}
</style>

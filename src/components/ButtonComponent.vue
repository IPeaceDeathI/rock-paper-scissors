<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { computed, ref, toRefs } from 'vue'
//typing
type Props = {
    gameType: string
    btnType?: string
    btnComputer?: string
    btnUser?: string
}
type Emits = {
    roundOver: [value: boolean, btnType: string]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const btnType = ref(props.btnType ? props.btnType : '')
const store = useScoreStore()

const roadMap = props.gameType == 'original' ? store.originalRoadMap : store.bonusRoadMap

// OLD VERSION (STUPID EDITION)
// const userPaper = function () {
//     switch (store.computer) {
//         case 'ROCK': {
//             store.incrementScore()
//             emit('roundOver', true, btnType.value)
//             break
//         }
//         case 'SCISSORS': {
//             store.decrementScore()
//             emit('roundOver', true, btnType.value)
//             break
//         }
//         case 'PAPER': {
//             store.setLastResult('draw')
//             emit('roundOver', true, btnType.value)
//             break
//         }
//     }
// }
// const userRock = function () {
//     switch (store.computer) {
//         case 'SCISSORS': {
//             store.incrementScore()
//             emit('roundOver', true, btnType.value)
//             break
//         }
//         case 'PAPER': {
//             store.decrementScore()
//             emit('roundOver', true, btnType.value)
//             break
//         }
//         case 'ROCK': {
//             store.setLastResult('draw')
//             emit('roundOver', true, btnType.value)
//             break
//         }
//     }
// }
// const userScissors = function () {
//     switch (store.computer) {
//         case 'PAPER': {
//             store.incrementScore()
//             emit('roundOver', true, btnType.value)
//             break
//         }
//         case 'ROCK': {
//             store.decrementScore()
//             emit('roundOver', true, btnType.value)
//             break
//         }
//         case 'SCISSORS': {
//             store.setLastResult('draw')
//             emit('roundOver', true, btnType.value)
//             break
//         }
//     }
// }
//END OLD VERSION (STUPID EDITION)

const btnClick = function () {
    store.makeComputerChoice()

    const tmp = roadMap[btnType.value.replace(' bonus', '')][store.computer.toLowerCase()] as string //TODO ну тут чутка подумать, главное, что работает
    if (tmp == 'draw') {
        store.setLastResult('draw')
        emit('roundOver', true, btnType.value)
    } else if (tmp == 'win') {
        store.incrementScore()
        emit('roundOver', true, btnType.value)
    } else if (tmp == 'lose') {
        store.decrementScore()
        emit('roundOver', true, btnType.value)
    } else console.error('unreachable point ^ ^')
}
</script>

<template>
    <v-btn
        :class="
            btnType
                ? 'btn-' + btnType
                : btnUser
                  ? 'user-' + btnUser
                  : btnComputer
                    ? 'computer-' + btnComputer
                    : ''
        "
        :size="btnType ? '125' : '250'"
        rounded="circle"
        @click="btnClick"
        ><img
            :class="'icon' + (btnUser ? '-res' : btnComputer ? '-res' : '')"
            :src="
                '/icon-' +
                (btnType
                    ? btnType.replace(' bonus', '')
                    : btnUser
                      ? btnUser.replace(' bonus', '')
                      : btnComputer
                        ? btnComputer.replace(' bonus', '')
                        : '') +
                '.svg'
            "
        />
        <div
            :class="
                'border-top border-' +
                (btnType ? btnType : btnUser ? btnUser : btnComputer ? btnComputer : '') +
                (btnUser ? ' extend' : btnComputer ? ' extend' : '')
            "
        />
        <div :class="'border-bottom' + (btnUser ? ' extend' : btnComputer ? ' extend' : '')" />
    </v-btn>
</template>

<style scoped>
.btn-paper {
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}
.btn-scissors {
    position: absolute;
    top: 40%;
    left: 60%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}
.btn-rock {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}
.btn-paper.bonus {
    position: absolute;
    top: 54%;
    left: 65%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}
.btn-scissors.bonus {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}
.btn-rock.bonus {
    position: absolute;
    top: 81%;
    left: 60%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}
.btn-lizard.bonus {
    position: absolute;
    top: 81%;
    left: 40%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}
.btn-spock.bonus {
    position: absolute;
    top: 54%;
    left: 35%;
    transform: translate(-50%, -50%);
    border: 5px solid transparent;
}

.border-top {
    position: absolute;
    width: 155px;
    height: 155px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: inset 0px 5px 0px 0px rgba(20, 20, 20, 0.266);
}

.border-paper {
    border: 20px solid #4865f4;
}
.border-scissors {
    border: 20px solid #e2970d;
}
.border-rock {
    border: 20px solid #dc2e4e;
}
.border-lizard {
    border: 20px solid #97e20d;
}
.border-spock {
    border: 20px solid #970de2;
}
.icon {
    z-index: 2;
}
.icon-res {
    width: 100px;
    height: auto;
    z-index: 2;
}
.border-bottom {
    z-index: 3;
    width: 155px;
    height: 155px;
    position: absolute;
    margin-bottom: 12px;
    border-radius: 50%;
    box-shadow: 0px 7px 0px 0px rgba(20, 20, 20, 0.266);
}
.extend {
    width: 280px;
    height: 280px;
    border-width: 40px;
}
.extend.border-top {
    box-shadow: inset 0px 10px 0px 0px rgba(20, 20, 20, 0.266);
}
.extend.border-bottom {
    height: 264px;
    box-shadow: 0px 14px 0px 0px rgba(20, 20, 20, 0.266);
}
</style>

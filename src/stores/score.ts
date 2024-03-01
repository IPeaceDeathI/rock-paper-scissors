import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
    state: () => ({
        gameType: 'ORIGINAL',
        lastResult: '',
        score: 0,
        computer: '',
        originalRoadMap: {
            rock: {
                rock: 'draw',
                paper: 'lose',
                scissors: 'win'
            },
            paper: {
                rock: 'win',
                paper: 'draw',
                scissors: 'lose'
            },
            scissors: {
                rock: 'lose',
                paper: 'win',
                scissors: 'draw'
            }
        },
        bonusRoadMap: {
            rock: {
                rock: 'draw',
                paper: 'lose',
                scissors: 'win',
                lizard: 'win',
                spock: 'lose'
            },
            paper: {
                rock: 'win',
                paper: 'draw',
                scissors: 'lose',
                lizard: 'lose',
                spock: 'win'
            },
            scissors: {
                rock: 'lose',
                paper: 'win',
                scissors: 'draw',
                lizard: 'win',
                spock: 'lose'
            },
            lizard: {
                rock: 'lose',
                paper: 'win',
                scissors: 'lose',
                lizard: 'draw',
                spock: 'win'
            },
            spock: {
                rock: 'win',
                paper: 'lose',
                scissors: 'win',
                lizard: 'lose',
                spock: 'draw'
            }
        }
    }),
    getters: {
        arrOfChoices(state) {
            if (state.gameType == 'ORIGINAL') return ['ROCK', 'PAPER', 'SCISSORS']
            else return ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK']
            /**
             * @returns {string[]}
             */
        },
        getLastResult(state): string {
            return state.lastResult
        }
    },
    actions: {
        makeComputerChoice(): string {
            this.computer = this.arrOfChoices[Math.floor(Math.random() * this.arrOfChoices.length)]
        },
        incrementScore() {
            this.score++
            this.lastResult = 'win'
        },
        decrementScore() {
            this.score--
            this.lastResult = 'lose'
        },
        doubleScore() {
            this.score * 2
            this.lastResult = 'win'
        },
        setLastResult(value: string) {
            this.lastResult = value
        }
    }
})

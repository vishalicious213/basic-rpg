import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

// character constructor function
function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join("")
    }

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce(function(total, damage) {
            return total + damage
        })

        // console.log(`${this.name} is damaged by ${totalAttackScore}`)
        this.health -= totalAttackScore
        if (this.health < 0) {
            this.health = 0
        }
    }

    this.getCharacterHtml = function() {
        const { name, avatar, health, diceArray } = this
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container"> ${diceArray} </div>
            </div>
        `
    }
}

export default Character
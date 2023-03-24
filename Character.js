import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth

// character constructor function
function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join("")
    }

    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.health, this.maxHealth)
        console.log(percent)
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent <= 24 ? 'danger' : ``}" 
                    style="width: ${percent}%;">
                </div>
            </div>
        `
    }

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, damage) => total + damage)

        // console.log(`${this.name} is damaged by ${totalAttackScore}`)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }

        // console.log(getPercentage(this.health, this.maxHealth))
    }

    this.getCharacterHtml = function() {
        const { name, avatar, health, diceArray } = this
        const healthBar = this.getHealthBarHtml()

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                ${healthBar}
                <div class="dice-container"> ${diceArray} </div>
            </div>
        `
    }
}

export default Character
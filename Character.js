import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

// character constructor function
function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getCharacterHtml = function() {
        const { name, avatar, health, diceCount, diceArray } = this
        // const diceHtml = this.getDiceHtml(diceCount)
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container"> ${diceArray} </div>
            </div>
        `
    }

    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.currentDiceScore.map(function(score) {
            this.diceArray += `<div class="dice">${score}</div>`
        })
        // return getDiceRollArray(diceCount).map(function(die) {
        //     return `<div class="dice">${die}</div>`
        // }).join("")
    }
}

export default Character
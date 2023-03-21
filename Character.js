import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

// character constructor function
function Character(data) {
    Object.assign(this, data)

    this.getCharacterHtml = function() {
        const { name, avatar, health, diceCount, diceArray } = this
        const diceHtml = this.getDiceHtml(diceCount)
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container"> ${diceArray} </div>
            </div>
        `
    }

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(die) {
            return `<div class="dice">${die}</div>`
        }).join("")
    }
}

export default Character
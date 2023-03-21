import characterData from "./data.js"
import { getDiceRollArray } from "./utils.js"

// character constructor function
function Character(data) {
    Object.assign(this, data)

    this.getCharacterHtml = function() {
        const { elementId, name, avatar, health, diceCount } = this
        const diceHtml = this.getDiceHtml(diceCount)
        // document.getElementById(elementId).innerHTML = `
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container"> ${diceHtml} </div>
            </div>
        `
    }

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(die) {
            return `<div class="dice">${die}</div>`
        }).join("")
    }
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

render()
// hero object
const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: "60",
    diceCount: 3
}

// monster object
const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: "10",
    diceCount: 1
}

// generate random dice rolls
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return Math.floor((Math.random() * 6) + 1)
    })
}

// generate dice html from random rolls
function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(die) {
        return `<div class="dice">${die}</div>`
    }).join("")
}

// character constructor function
function Character(data) {
    this.elementId = data.elementId
    this.name = data.name
    this.avatar = data.avatar
    this.health = data.health
    this.diceCount = data.diceCount
}

// render hero or monster characters
function renderCharacter(char) {
    const { elementId, name, avatar, health, diceCount } = char

    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container"> ${diceHtml} </div>
        </div>
    `
}

renderCharacter(hero)
renderCharacter(monster)
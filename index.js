// hero object
const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: "60",
    diceRoll: [3, 1, 4],
    diceCount: 3
}

// monster object
const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: "10",
    diceRoll: [2],
    diceCount: 1
}

// generate random dice rolls
function getDiceRollArray(diceCount) {
    let diceRolls = []
    for (i = 0; i < diceCount; i++) {
        diceRolls.push(Math.floor((Math.random() * 6) + 1))
    }
    return diceRolls
}

// render hero or monster characters
function renderCharacter(char) {
    const { elementId, name, avatar, health, diceRoll, diceCount } = char

    const diceHtml = diceRoll.map(function(die) {
        return `<div class="dice">${die}</div>`
    }).join("")

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
console.log(getDiceRollArray(3))
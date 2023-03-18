// hero object
const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: "60",
    diceRoll: 6
}

// monster object
const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: "10",
    diceRoll: 4
}

// render hero or monster characters
function renderCharacter(char) {
    document.getElementById(char.elementId).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${char.name} </h4>
            <img class="avatar" src="${char.avatar}"/>
            <p class="health">health: <b> ${char.health} </b></p>
            <div class="dice-container"><div class="dice"> ${char.diceRoll} </div></div>
        </div>
    `
}

renderCharacter(hero)
renderCharacter(monster)
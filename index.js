// hero variables
const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = "60"
const heroDiceRoll = 6

// monster variables
const monsterElementId = "monster"
const monsterNAme = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = "10"
const monsterDiceRoll = 4

// render hero or monster characters
function renderCharacter(elementID, name, avatar, health, diceRoll) {
    document.getElementById(elementID).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
        </div>
    `
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll)
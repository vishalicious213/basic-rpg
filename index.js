import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById("attack-button").addEventListener("click", attack)

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()

    if (wizard.dead || orc.dead) {
        endGame()
    }
}

function endGame() {
    const endMoji = 
        wizard.dead && orc.dead ? "☠️☠️☠️"
        : wizard.dead ? "☠️"
        : "🔮"

    const endMessage =
        wizard.dead && orc.dead ? "No victors - all creatures are dead."
        : wizard.dead ? "The orc is victorious."
        : "The wizard wins!"

    document.body.innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endMoji}</p>
        </div>`
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

render()
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
    const endMessage =
        wizard.dead && orc.dead ? "No victors - all creatures are dead."
        : wizard.dead ? "The orc is victorious."
        : "The wizard wins!"
    console.log(endMessage)
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

render()
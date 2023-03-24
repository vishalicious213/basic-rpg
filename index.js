import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)
let monstersArray = ["orc", "demon", "goblin"]
let monster = getNewMonster()

document.getElementById("attack-button").addEventListener("click", attack)

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()

    if (wizard.dead) {
        endGame()
    } else if (monster.dead) {
        if (monstersArray.length > 0) {
            monster = getNewMonster()
            setTimeout(() => render(), 1500)
        } else {
            endGame()
        }
    }
}

function endGame() {
    const endMoji = 
        wizard.dead && monster.dead ? "☠️☠️☠️"
        : wizard.dead ? "☠️"
        : "🔮"

    const endMessage =
        wizard.dead && monster.dead ? "No victors - all creatures are dead."
        : wizard.dead ? `The ${monster.name} is victorious.`
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
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

render()
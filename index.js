import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)
let monstersArray = ["orc", "demon", "goblin"]
let monster = getNewMonster()
let isWaiting = false

document.getElementById("attack-button").addEventListener("click", attack)

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
    if (!isWaiting) {
        wizard.getDiceHtml()
        monster.getDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
    
        if (wizard.dead) {
            endGame()
        } else if (monster.dead) {
            isWaiting = true
            if (monstersArray.length > 0) {
                setTimeout(() => {
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                }, 1500)
            } else {
                endGame()
            }
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

        setTimeout(() => {
            document.body.innerHTML = 
                `<div class="end-game">
                    <h2>Game Over</h2>
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endMoji}</p>
                </div>`
        }, 1500)
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

render()
// generate random dice rolls
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return Math.floor((Math.random() * 6) + 1)
    })
}

// start game with blank dice until they're rolled
function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return `<div class="placeholder-dice"></div>`
    }).join("")
}

export { getDiceRollArray, getDicePlaceholderHtml }
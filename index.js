let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageContent = document.getElementById("message-content")
let sumContent = document.getElementById("sum-content")
let cardsContent = document.getElementById("cards-content")

playerContent.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let num = Math.floor(Math.random() *13 ) + 1
    if (num === 1) {
        return 11
    } else if (num === 11 || num === 12 || num === 13) {
        return 10
    } else {
        return num
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsContent.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsContent.textContent += " " + cards[i]
    }
    
    sumContent.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageContent.textContent = message
}

function newCard() {
    if (isAlive) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()        
    }
}
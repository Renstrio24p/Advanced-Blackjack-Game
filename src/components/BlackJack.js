import './BlackJack.scss'

export default function BlackJack(DOM) {
    let firstCard;
    let secondCard;
    let sum;
    let hasBlackJack;
    let isAlive;
    let message = "";
    let messageEl;

    // Initialize Game State
    function initializeGame() {
        firstCard = Math.floor(Math.random() * 11) + 1;
        secondCard = Math.floor(Math.random() * 11) + 1;
        sum = firstCard + secondCard;
        hasBlackJack = false;
        isAlive = true;
        message = "";
    }

    // Rendering the Game
    function RenderGame() {
        if (isAlive) {
            let sumEl = document.querySelector('#sum-el');
            let cardsEl = document.querySelector('#cards-el');
            messageEl = document.getElementById('message-el');
            const newCardButton = document.getElementById('newCard');
            newCardButton.style.display = 'block'
            sumEl.style.color = 'white'

            cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
            sumEl.textContent = `Sum: ${sum}`;
            if (sum < 21) {
                message = "Do you want to draw a new card?";
                startGame.textContent = 'Next Draw'
            } else if (sum === 21) {
                message = "You've got Blackjack!";
                hasBlackJack = true;
                newCardButton.textContent = "New Game"; 
                startGame.textContent = "You've Won!"
                sumEl.style.color = 'goldenrod'
            } else {
                message = "You're out of the game!";
                isAlive = false;
                startGame.textContent = "New Game";
                sumEl.style.color = 'red';
                newCardButton.style.display = 'none'
            }
            messageEl.textContent = message;
        } else {
            isAlive = true;
            messageEl.textContent = "Want to play a round?"; // Reset message
            newDisplayCard.textContent = '';
            initializeGame(); // Reset initial values
            newCardButton.textContent = "New Card"; 
            startGame.textContent = 'Start Game';
        }
    }

    // Check the user if is Alive and doesn't have a black jack
    function NewCard() {
        if (isAlive && !hasBlackJack) {
            let card = Math.floor(Math.random() * 11) + 1;
            newDisplayCard.textContent = `New Card: ${card}`;
            sum += card;
        } else {
            initializeGame();
            startGame.textContent = 'New Game'
            newCardButton.style.display = 'none'
        }
    }

    initializeGame();

    DOM.innerHTML = (`
        <h1>Black Jack</h1>
        <p id='message-el'>Want to play a round?</p>
        <p id='newcard-el'></p>
        <p id='cards-el'>Cards:</p>
        <p id='sum-el'>Sum:</p>
        <button class="start-game" id='startGame'>Start Game</button>
        <button class="start-game" id='newCard'>New Card</button>
    `);

    // Getting Elements and Event Listeners
    const newCardButton = document.getElementById('newCard');
    const newDisplayCard = document.getElementById('newcard-el');
    newCardButton.addEventListener('click', NewCard);
    const startGame = document.getElementById('startGame');
    startGame.addEventListener('click', RenderGame);

    RenderGame(); // Re render the Game
}

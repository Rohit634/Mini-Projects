var symbols = ['♠', '♣', '♥', '♦', '★', '☀', '♫', '☁'];
var cards = [];
var flippedCards = [];
var matchedPairs = 0;

function startGame() {
    initializeCards();
    shuffleCards();
    renderCards();
}

function initializeCards() {
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    for (var i = 0; i < symbols.length; i++) {
        cards.push({ symbol: symbols[i], isFlipped: false });
        cards.push({ symbol: symbols[i], isFlipped: false });
    }
}

function shuffleCards() {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function renderCards() {
    var gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    cards.forEach(function(card, index) {
        var cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        if (card.isFlipped) {
            cardElement.textContent = card.symbol;
        }
        cardElement.addEventListener('click', function() {
            flipCard(index);
        });
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(index) {
    if (flippedCards.length < 2 && !cards[index].isFlipped) {
        cards[index].isFlipped = true;
        flippedCards.push(index);
        renderCards();
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    var index1 = flippedCards[0];
    var index2 = flippedCards[1];
    if (cards[index1].symbol === cards[index2].symbol) {
        matchedPairs++;
        if (matchedPairs === symbols.length) {
            alert('Congratulations! You\'ve won!');
        }
    } else {
        cards[index1].isFlipped = false;
        cards[index2].isFlipped = false;
    }
    flippedCards = [];
    renderCards();
}

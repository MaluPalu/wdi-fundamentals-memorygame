var cards = [
{ 
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
}
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
}
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
}
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}
var flipCard = function () {
	this.getAttribute('date-id')
	console.log("User flipped" + cards[cardID].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cardImage);
	console.log(suit);
};
if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again")
}
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
	}
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
};
createBoard();
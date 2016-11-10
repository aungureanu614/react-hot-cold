
//Input a guess
var INPUT_GUESS = "INPUT_GUESS";
var inputGuess = function(guess){
	return{
		type: INPUT_GUESS,
		guess: guess
	};
};

//Start new game
var NEW_GAME = "NEW_GAME";
var newGame = function(){
	return{
		type: NEW_GAME,
	};
};


exports.INPUT_GUESS = INPUT_GUESS;
exports.inputGuess = inputGuess;

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
//Generate a random number between 1 and 100
var GENERATE_NUMBER = "GENERATE_NUMBER";
var generateNumber = function(number){
	return{
		type: GENERATE_NUMBER,
		number: number
	};
};
//Input a guess
var INPUT_GUESS = "INPUT_GUESS";
var inputGuess = function(guess){
	return{
		type: INPUT_GUESS,
		guess: guess
	};
};
//Check guess to see if it's hot or cold

var CHECK_GUESS = "CHECK_GUESS";
var checkGuess = function(number, guess){
	return{
		type: CHECK_GUESS,
		number: number,
		guess: guess
	};
};

//Start new game

var NEW_GAME = "NEW_GAME";
var newGame = function(number, game){
	return{
		type: NEW_GAME,
		number: number,
		game: game
	};
};

exports.GENERATE_NUMBER = GENERATE_NUMBER;
exports.generateNumber = generateNumber;
exports.INPUT_GUESS = INPUT_GUESS;
exports.inputGuess = inputGuess;
exports.CHECK_GUESS = CHECK_GUESS;
exports.checkGuess = checkGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
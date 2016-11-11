var isomorphicFetch = require('isomorphic-fetch');
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

var FETCH_FEWEST_GUESSES = "FETCH_FEWEST_GUESSES";
var fetchFewestGueses = function(record){
	return{
		type: FETCH_FEWEST_GUESSES,
		record: record
	};
};

var SAVE_FEWEST_GUESSES = "SAVE_FEWEST_GUESSES";
var saveFewestGueses = function(record, feedback){
	return{
		type: SAVE_FEWEST_GUESSES,
		record: record,
		feedback: feedback
	};
};


var fetchRecord = function() {
    return function(dispatch) {
        var url = 'http://localhost:3000/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var record = data.record;
            
            return dispatch(
                fetchFewestGueses(record)
            );
        })
        .catch(function(error) {
            return dispatch(
                console.log("Error")
            );
        });
    };
};

var saveRecord = function(attempt) {
    return function(dispatch) {
        var url = 'http://localhost:3000/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var record = data.record;
            var feedback = data.feedback;
            return dispatch(
                saveFewestGueses(record, feedback)
            );
        })
        .catch(function(error) {
            return dispatch(
                console.log("Error")
            );
        });
    };
};


exports.saveRecord = saveRecord;
exports.fetchRecord = fetchRecord;

exports.INPUT_GUESS = INPUT_GUESS;
exports.inputGuess = inputGuess;

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGueses = fetchFewestGueses;

exports.SAVE_FEWEST_GUESSES = SAVE_FEWEST_GUESSES;
exports.saveFewestGueses = saveFewestGueses;
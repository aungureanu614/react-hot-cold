var actions = require('../actions/index');

var generateNum = function() {
    return Math.floor(Math.random() * (100 - 1) + 1);
};
var getNewState = function() {
    return {
        number: generateNum(),
        feedback: "Guess a number between 1 and 100",
        guessList: [],
        fewestGuesses: null

    };
};


var gameReducer = function(state, action) {
    state = state || getNewState();
    var guessList = [];
    var feedback;
    var newState;
    var fewestGuesses;

    if (action.type === actions.INPUT_GUESS) {


       newState = Object.assign({}, state);

        if (state.number == action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "You won!";
           

        } else if (state.number > action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "Too low";
          
        } else if (state.number < action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "Too high";
           
        }


        return newState;

    }else if (action.type === actions.NEW_GAME) {
        
        return getNewState();

    }else if(action.type === actions.FETCH_FEWEST_GUESSES){
            newState.fewestGuesses = action.record;

            return newState;

    }else if(action.type === actions.SAVE_FEWEST_GUESSES){
            alert(action.feedback);
            newState.fewestGuesses = action.record;
            return newState;
    }

    return state;

};

exports.gameReducer = gameReducer;

var actions = require('../actions/index');

var generateNum = function() {
    return Math.floor(Math.random() * (100 - 1) + 1);
};
var getNewState = function() {
    return {
        number: generateNum(),
        feedback: "Guess a number between 1 and 100",
        guessList: [],
        // gameWon: false

    };
};



// var gameReducer = function(state, action) {
//     state = state || initialGameState;
//     if (action.type === actions.NEW_GAME) {
//         var number = Math.floor(Math.random() * (100 - 1) + 1);
//         return state.concat({
//             number: number
//         });
//     } else if (action.type === actions.INPUT_GUESS) {
//         var feedback;
//         if (state[0].number === action.guess) {
//              feedback = "you win!";
//         } else if (state[0].number > action.guess) {
//             feedback = "too low";
//         } else if (state[0].number < action.guess) {
//             feedback = "too high";
//         }

//         var newGuess = Object.assign({}, {guess:action.guess, feedback: feedback });
//         return state.concat(newGuess);

//      } 

//     return state;
// };

var gameReducer = function(state, action) {
    state = state || getNewState();
    var guessList = [];
    var feedback;
    var newState;
    

    if (action.type === actions.INPUT_GUESS) {


        newState = Object.assign({}, state);

        if (state.number == action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "You won!";
            // newState.gameWon = true;

        } else if (state.number > action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "Too low";
            // newState.gameWon = false;
        } else if (state.number < action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "Too high";
            // newState.gameWon = false;
        }


        return newState;
    }

    if (action.type === actions.NEW_GAME) {
        return getNewState();
    }

    return state;

};

exports.gameReducer = gameReducer;

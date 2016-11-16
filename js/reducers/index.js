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
    // var fewestGuesses;
    

    if (action.type === actions.INPUT_GUESS) {


       newState = Object.assign({}, state);

        if (state.number == action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "You won!";

            actions.fetchRecord();
            if(newState.fewestGuesses === null){
                newState.fewestGuesses = newState.guessList.length;
                
            }else if(newState.fewestGuesses > newState.guessList.length){
                newState.fewestGuesses = newState.guessList.length;
            }
            //call actions.fetchRecord
            //compare fewestGuesses to newState.guessList.length, check if fewestGuesses is null first
            //if fewestGuesses < newState.guessList.length pass to SaveFewestGuesses

        } else if (state.number > action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "Too low";
          
        } else if (state.number < action.guess) {
            newState.guessList.push(action.guess);
            newState.feedback = "Too high";
           
        }


        return newState;

    }else if (action.type === actions.NEW_GAME) {
        newState = Object.assign({}, getNewState(), {fewestGuesses: state.fewestGuesses});
        // return getNewState();
        return newState;

    }else if(action.type === actions.FETCH_FEWEST_GUESSES){
            return newState.concat({fewestGuesses: action.record});
        
         

    }else if(action.type === actions.SAVE_FEWEST_GUESSES){
            alert(action.feedback);
            return newState.concat({fewestGuesses: action.record});
           
    }

    
    return state;

};



exports.gameReducer = gameReducer;

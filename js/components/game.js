var React = require('react');
var connect = require('react-redux').connect;

// var Guess = require('./guess');
var actions = require('../actions/index');
var numGuesses = 0;
var Game = React.createClass({
    
	startGame: function(){
        this.props.dispatch(actions.newGame());
        // this.props.dispatch(actions.fetchRecord());
	},
	guess: function(){
        
		var guess = this.refs.guessInput.value;
        this.props.dispatch(actions.inputGuess(guess));   
        if(guess == this.props.guesses.number){
            this.props.dispatch(actions.saveRecord(this.props.guesses.guessList.length));
        }
        
	},

	render: function(){
		  
         
        return (
            <div className="game">
                <p>{this.props.guesses.feedback}</p>

            	<input id="input" type="text" ref="guessInput" />
                
                <button type="button" onClick={this.guess}>
                    Guess
                </button>
                <button type="button" onClick={this.startGame}>
                    New Game
                </button>
                <p>{this.props.guesses.guessList}</p>
                {console.log(this.props.guesses)}
                <p>Winning record for num guesses: {this.props.guesses.fewestGuesses}</p>

            </div>
        );
	}
});

var mapStateToProps = function(state, props){
    return{
        guesses: state
    }
}

var Container = connect(mapStateToProps)(Game);

module.exports = Container;


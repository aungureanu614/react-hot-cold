var React = require('react');
var connect = require('react-redux').connect;

// var Guess = require('./guess');
var actions = require('../actions/index');

var Game = React.createClass({
	startGame: function(){
        this.props.dispatch(actions.newGame());
	},
	guess: function(){
		var guess = this.refs.guessInput.value;
        this.props.dispatch(actions.inputGuess(guess));
        
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


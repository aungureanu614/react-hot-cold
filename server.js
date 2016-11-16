var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', 8080);

app.use(express.static('build'));
app.use(bodyParser.json());

var fewestGuesses = null;

app.post('/fewest-guesses', function(req, res) {
    var attempt = Number(req.body.attempt);
    var feedback = "";

    if(fewestGuesses == null){
      feedback = "You're the first one to win";
      fewestGuesses = attempt;
    }
    else if(attempt == fewestGuesses){
      feedback = "You tied the record for fewest guesses";
    }else if(attempt < fewestGuesses){
      feedback = "You made a new fewest guesses record";
      fewestGuesses = attempt;
    }else if(attempt > fewestGuesses){
      feedback = "You didn't beat the record number of guesses";
    }

    var result = {
      record: fewestGuesses,
      feedback: feedback
      
    };

    res.status(201).json(result);

});

app.get('/fewest-guesses', function(req, res) {
    var data = {record: fewestGuesses};
    
    res.status(200).header("Access-Control-Allow-Origin", "*").json(data);
  
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

exports.app = app;
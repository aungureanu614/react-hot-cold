var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static('build'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
var fewestGuesses = null;

app.get('/fewest-guesses', function(req, res) {
    var data = {record: fewestGuesses};
    
    res.status(200).json(data);
  
});

app.post('/fewest-guesses', function(req, res) {
    var attempt = req.body.attempt;
    var feedback = "";

    if(fewestGuesses = null){
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

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

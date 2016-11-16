var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
var app = server.app;


chai.use(chaiHttp);

describe('React-Hot-Cold', function() {

	it('should add an attempt on POST', function(done) {
        chai.request(app)
            .post('/fewest-guesses')
            .send({'attempt': '30'})
            .end(function(err, res) {
                 console.log(err);
                should.equal(err, null);

                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('record');
                res.body.should.have.property('feedback');
                res.body.feedback.should.be.a('string');
                res.body.feedback.should.equal('"You didn\'t beat the record number of guesses"');
                res.body.record.should.equal('30'); 
                console.log(res.body);          
                done();
            });
    });

	it('should get number of guesses on GET', function(done) {
        chai.request(app)
            .get('/fewest-guesses')
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                res.should.be.json;
                res.body.record.should.equal('20');              	
                console.log(res.body);
                done();
            });
    });

    


});
'use strict';

process.env.MONGO_URI = 'mongodb://localhost/blog_test';
require('../app.js');
var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

var expect = chai.expect;

describe('POST - Create User Test', function() {
 after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('POST - record value', function(done) {
    chai.request('localhost:3000/api/v1')
      .post('/create_user')
      .send({email:'jane@example.com', password:'doe123'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('token');
        done();
      });
  });

});
/*
describe('POST - Create User Test', function() {
  var token = '';
 before(function(done){
        chai.request('localhost:3000/api/v1')
        .post('/create_user')
        .send({email:'jane1@example.com', password:'doe123'})
        .end(function(err, res) {
          token = res.body.token; 
          //console.log('token'+ token);
          done();
        });
    });
  it('POST - record value', function(done) {
    chai.request('localhost:3000/api/v1')
      .post('/sign_in')
      .send({email:'jane1@example.com',password:'doe123'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        console.log("res mel"+res.body.);
        expect(res.body).to.have.property('token');
        done();
      });
  });

});
*/
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var User = require('../server/models/user')
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function () {
    it('should list ALL users on /users GET', function (done) {
        chai.request(server)
            .get('/api/users')
            .end(function (err, res) {
                res.should.have.status(200)
                res.should.be.json
                done()
            })
    })
    it('should list a SINGLE user on /users/:id GET', function (done) {
        chai.request(server)
            .get('/api/users/3')
            .end(function (err, res) {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('object')
                res.body.should.have.property('id');
                res.body.should.have.property('userid');
                res.body.should.have.property('email');
                res.body.should.have.property('password');
                res.body.should.have.property('fname');
                res.body.should.have.property('lname');
                res.body.userid.should.equal('hello');
                res.body.email.should.equal('dsa');
                res.body.password.should.equal('ads');
                res.body.fname.should.equal('dsa');
                res.body.lname.should.equal('dsads');
                res.body.id.should.equal(3);
                done()
            })
    })
    it('should add a SINGLE user on /users POST', function (done) {
        chai.request(server)
            .post('/api/users')
            .send({ 'userid': 'man21', 'email': 'pdoap@dksma.com', 'password': 'dsaui82', 'fname': '29102waido', 'lname': 'dsad334fed' })
            .end(function (err, res) {
                res.should.have.status(201)
                res.should.be.json
                res.body.should.be.a('object')
                res.body.should.have.property('id');
                res.body.should.have.property('userid');
                res.body.should.have.property('email');
                res.body.should.have.property('password');
                res.body.should.have.property('fname');
                res.body.should.have.property('lname');
                done();
            });
    })
    it('should update a SINGLE user on /user/:id PUT', function (done) {
        chai.request(server)
            .get('/api/users/3')
            .end(function (err, res) {
                chai.request(server)
                    .put('/users/' + res.id)
                    .send({ 'userid': 'dsas' })
                    .end(function (error, response) {
                        res.should.have.status(200)
                        res.should.be.json
                        res.body.should.be.a('object')
                        res.body.should.have.property('id');
                        res.body.should.have.property('userid');
                        res.body.should.have.property('email');
                        res.body.should.have.property('password');
                        res.body.should.have.property('fname');
                        res.body.should.have.property('lname');
                        done();
                    });
            })
    })
});
const path = require('path');
const bikes = require('../controllers/bike_controller.js');
const users = require('../controllers/user_controller.js');

module.exports = function(app) {

    app.post('/api/register', function(req, res) {
        users.create(req, res);
        console.log('***** User Created *****');
    });
    
    app.post('/api/login', function(req, res) {
        users.loginUser(req, res);
        console.log('Verifying User');
    });

    app.get('/api/randbikes', function(req,res){
        bikes.randomBike(req,res);
        console.log("**** loading random bikes ****");
    });

    app.get('/api/userBikes', function(req,res){
        bikes.userBikes(req,res);
        console.log("**** loading all bikes ****")
    });
   
    app.get('/api/allBikes', function(req,res){
        bikes.allBikes(req,res);
        console.log("**** loading all bikes ****")
    });

    app.get('/logout', function(req,res){
        users.logout(req,res)
    });

    app.get('/currentUsers', function(req,res){
        users.current(req,res)
    });

    app.post('/api/newBikeListing', function(req,res){
        bikes.create(req,res)
        console.log("creating bike-list for ",req.session.user_id)
    });

    app.all('*', function(req, res) {
        console.log('app.all hit - in routes.js')
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
  
};
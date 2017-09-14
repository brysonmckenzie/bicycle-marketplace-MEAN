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






    
    // app.get('/api/userLogin', function(req, res) {
    //     users.userLogin(req, res);
    //     console.log('****Getting User Data****');
    // });

    // app.post('/api/examples/update', function(req, res) {
    //     examples.update(req, res);
    //     console.log('example.update route hit')
    // })

    // app.post('/api/register/destroy', function(req, res) {
    //     examples.destroy(req, res);
    //     console.log('example.delete route hit');
    // })



    app.all('*', function(req, res) {
        console.log('app.all hit - in routes.js')
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
  
};
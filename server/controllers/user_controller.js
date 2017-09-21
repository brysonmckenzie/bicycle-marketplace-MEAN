const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
var session = require("express-session");
mongoose.Promise = global.Promise

module.exports = {
  create: function(req, res) {
    var user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    user.save()
      .then(user => {
        req.session.user_id = user._id;
        console.log(req.session.user_id + ' saved to session');
        res.json(user);
        console.log("After res.json, before redirect...");
      })
      .catch(err => {
        res.status(500);
        console.log("Inside the .catch");
        console.log(err);
        res.json(err);
      });
  },

  loginUser: function(req, res) {
    User.findOne({email: req.body.email})
    .then( user => { 
      req.session.user_id = user._id;
      console.log(req.session.user_id + ' saved to session')
      res.json(user) 
    })
    .catch(err => {console.log(err)})
  },

  current: (req, res) => {
    if(!req.session.user_id){
      User.findOne({email: req.body.email}).then(user => {
        console.log('*** JacKpot **** ')
      })
    }
  },

  logout:  (req, res) => {
    req.session.destroy();
    res.json(true);
 }

}

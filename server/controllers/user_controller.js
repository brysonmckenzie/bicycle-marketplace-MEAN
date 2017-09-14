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
        console.log(req.session.user_id + ' saved to sessions');
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
    console.log("*****finding current user*****");
    let current_user = User.findOne({ email: req.body.email }, function(
      err,user) {
      if (err) {
        console.log("Error occured during finding Current User");
        res.json(err);
      } else {
        console.log('Found ',current_user);
        if ((current_user.password = req.body.password)) {
            
          req.session.user_id = user._id;
          res.json(user);
        }
      }
    });
  },

  current: (req, res) => {
    if(!req.session.user_id){
      User.findOne({email: req.body.email}).then(user => {
        console.log('*** JacKpot **** '+ user)
      })
    }
  },

  logout:  (req, res) => {
    req.session.destroy();
    res.json(true);
 }

}

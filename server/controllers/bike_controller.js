const mongoose = require('mongoose');
const Bike = mongoose.model('Bicycle');
const User = mongoose.model('User');


module.exports = {
    create: function(req, res) {
        user = new User({
            
            first_name : req.body.firstname,
            last_name : req.body.last_name,
            email : req.body.email,
            password : req.body.password,
      

        });

        User.save(function(err) {
            
            if(err) {
                res.json(err);
            } else {
                res.json('success!');
            }
        });
    },

    randomBike: (req,res) => { Bike.find({})
        .then ((bikes) => {
            let numBike = bikes.length+1;
            let rand = Math.floor(Math.random() * numBike);
            res.json(bikes[rand]);
            console.log(rand,' <*** Random Number')
            console.log(numBike, '<*** Number of Bikes')
        })

    },

    allBikes: (req,res) => { Bike.find({})
    console.log(allBikes)
    .then((bikes) => { res.json(bikes)})
    .catch((err,bikes) => {
        if(err){
            console.log('error!!! allBikes not loading')
        }
     })
    }




    
}
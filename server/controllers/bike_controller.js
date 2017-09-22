const mongoose = require('mongoose');
const Bike = mongoose.model('Bicycle');
const User = mongoose.model('User');


module.exports = {
    create: function(req, res) {

        var bike = new Bike({
            
            image : req.body.image,
            title : req.body.title,
            price : req.body.price,
            description : req.body.description,
            location : req.body.location,
            owner: req.session.user_id
        });
        bike.save()
        .then(bike => {
          res.json(bike);
          console.log("After res.json, before redirect...");
        })
        .catch(err => {
          res.status(500);
          console.log("Inside the .catch");
          console.log(err);
          res.json(err);
        });
       
    },

    randomBike: (req,res) => { Bike.find({})
        .then ((bikes) => {
            let numBike = bikes.length;
            let rand = Math.floor(Math.random() * numBike);
            res.json(bikes[rand]);
            console.log(rand,' <*** Random Number')
            console.log(numBike, '<*** Number of Bikes')
        })

    },

    userBikes: (req,res) => { Bike.find({owner: req.session.user_id})
    .then((bikes) => { res.json(bikes)
        console.log('********* user bikes starting process... in User Bikes ************')
        console.log(bikes)
        console.log('******** userBikes sending data ********')
    
    })
    .catch((err, bikes) => {
        if(err){
            console.log('error!!! userBikes not loading')
        }
     })
    },

    allBikes: (req,res) => { Bike.find({})
    .then((bikes) => { res.json(bikes)
        console.log(bikes)})
    .catch((err, bikes) => {
        if(err){
            console.log('error!!! allBikes not loading')
        }
     })
    },

    userListings: (req,res) => { Bike.find({_id: req.session.user_id})
    .then((bikes) => { res.json(bikes)
        console.log(bikes)})
    .catch((err, bikes) => { console.log(err) })
    }
  
}
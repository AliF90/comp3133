const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

//Read ALL
//http://localhost:8081/restaurants
//http://localhost:8081/restaurants?sortBy=ASC
app.get('/restaurants', async (req, res) => {
    if(req.query.sortBy){
        const restaurants =  await restaurantModel.find({}).select("_id cuisines name city restaurant_id").sort({'restaurant_id' : req.query.sortBy});
        try {
            res.status(200).send(restaurants);
        } catch (err) {
            res.status(500).send(err);
        }
    }else{
        const restaurants =  await restaurantModel.find({})
        try {
            res.status(200).send(restaurants);
        } catch (err) {
            res.status(500).send(err);
        }
    }

});


//http://localhost:8081/restaurants/Delicatessen
app.get('/restaurants/Delicatessen', async (req, res) => {
    console.log("cfsdfkhbhk")
    const restaurants = await restaurantModel.find({cuisine : 'Delicatessen' , city:{ $ne: "Brooklyn" }});
    
    try {
      if(restaurants.length != 0){
        res.send(restaurants);
      }else{
        res.send(JSON.stringify({status:false, message: "No data found"}))
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Search By Causine - PATH Parameter
//http://localhost:8081/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:name', async (req, res) => {
  const name = req.params.name
  const restaurants = await restaurantModel.find({cuisine : name});
  
  try {
    if(restaurants.length != 0){
      res.send(restaurants);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}))
    }
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app
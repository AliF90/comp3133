const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  _id:{
    type: String,
  },
  city: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  name: {
    type: String,
  },
  restaurant_id : {
    type: String,
  }
});



const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
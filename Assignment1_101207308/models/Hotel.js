const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    hotel_id : {
        type: Number,
        required: [true, 'Please enter ID'], 
        unique: [true, "Duplicate ID Not allowed"],
    },
    hotel_name: {
        type: String,
        required: [true, 'Please enter hotel name'],
        unique: [true, "Duplicate Hotel Name Not allowed"],
        trim: true,
        lowercase: true,
    },
    street: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    city: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    postal_code: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
            if (value < 0.0){
               throw new Error("Price is not real.");
            }
        }
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Duplicate Email Not allowed"],
      trim: true,
      uppercase: true,
      validate: function(value) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(value);
      }
    },
  });
  
  const Hotel = mongoose.model("Hotel", HotelSchema);
  module.exports = Hotel;
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    hotel_id : {
        type: Number,
        required: [true, 'Please enter Hotel ID'], 
    },
    user_id : {
        type: Number,
        required: [true, 'Please enter User ID'], 
    },
    booking_date: {
        type: Date,
        required: true,
    },
    booking_start: {
        type: Date,
        required: true,
    },
    booking_end: {
        type: Date,
        required: true,
    },
  });
  
  const Book = mongoose.model("Book", BookSchema);
  module.exports = Book;
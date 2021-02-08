const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Maqke sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://AliNumpy:Alipegah94@cluster0.vw2de.mongodb.net/gbc_full_stack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(8081, () => { console.log('Server is running...') });
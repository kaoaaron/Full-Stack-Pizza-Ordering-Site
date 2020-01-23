var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    phoneNumber: String,
    emailAddress : String,  
    postalAddress : String,
    crustType: String,
    toppingCount: String,  
    numPizza: String,
    pizzaSize: String,
    priceBeforeTax: Number,
    priceAfterTax: Number,
    createdOn : {type : Date, default : Date.now}
  });

  module.exports = mongoose.model('Order', orderSchema);
var express = require('express');
const {check, validationResult} = require('express-validator/check');
const options = require('../options.json');
var router = express.Router();
const Order = require('../models/orders');
var priceCalc = require('../PriceCalculator');

//get orders
router.get('/orders', function(req, res, next) {
  Order.find({}, (err, orders)=> {
    if (err) {
      console.log(err);          
      res.status(500).json({msg : "Error retrieving orders"});
      return;
    }
    res.json(orders);
  });
});

//get pizza options
router.get('/options', function(req, res, next) {
    res.json(options);
});

//add order
router.post('/orders', [
  check('firstName').not().isEmpty().withMessage('First name must not be blank'),
  check('lastName').not().isEmpty().withMessage('Last name must not be blank'),
  check('phoneNumber').matches(/^[0-9]+/).withMessage("Phone number can only have numbers"),
  check('emailAddress').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).withMessage('Email is invalid'),
  check('postalAddress').matches(/^\d+[a-zA-Z\s]+/).withMessage("Postal Address is invalid")
],(req, res)=> {
  const errors = validationResult(req);
  if (errors.isEmpty()) {

    let sizeCost = parseInt(options.sizes[req.body.pizzaSize-1].price)
    let toppingPrice = options.toppingPrice
    let pricebeforetax = priceCalc.priceBeforeTax(sizeCost,req.body.numPizza,req.body.toppingCount,toppingPrice)
    console.log(pricebeforetax)
    let priceaftertax =  priceCalc.priceAfterTax(sizeCost,req.body.numPizza,req.body.toppingCount,toppingPrice, options.currentTax)
    console.log(priceaftertax)
    let order = new Order(req.body);

    let test = req.body
    test.priceBeforeTax = pricebeforetax
    test.priceAfterTax = priceaftertax
    console.log(test)

    order.save((err)=> {
        if (err) {
          console.log(err);          
          res.status(500).json({msg : "Error adding the order"});
          return;
        }
        res.json(test)
    });
  }
});

module.exports = router;

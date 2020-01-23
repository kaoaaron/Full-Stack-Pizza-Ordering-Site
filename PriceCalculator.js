class PriceCalculator{

   priceBeforeTax(sizePrice,numPizzas,numToppings, toppingPrice){

      console.log(sizePrice)
      return((sizePrice+numToppings*toppingPrice)*numPizzas).toFixed(2)
   }

   priceAfterTax(sizePrice,numPizzas,numToppings, toppingPrice,tax){

      return (((sizePrice+numToppings*toppingPrice)*numPizzas)*(1+tax/100)).toFixed(2)
   }
}

module.exports = new PriceCalculator();
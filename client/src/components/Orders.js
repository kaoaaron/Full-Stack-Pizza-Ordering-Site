/*
  Collection of orders
*/

import React from 'react';
import Order from './Order'

class Orders extends React.Component {
  render() {
    return this.props.orderInfo.map((order, index) => (
      <Order
        key={index}
        name={order.firstName+" "+order.lastName}
        phone={order.phoneNumber}
        email={order.emailAddress}
        address={order.postalAddress}
        toppingCount={order.toppingCount}
        numPizza={order.numPizza}
        pizzaSize={order.pizzaSize}
        crustType={order.crustType}
        orderTime={order.createdOn}
      ></Order>
    ));
  }
}

export default Orders;

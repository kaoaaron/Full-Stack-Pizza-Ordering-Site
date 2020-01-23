/*
  Book view of each individual book
*/

import React from "react";

class Order extends React.Component {
  render() {
    return (
      <div style={{padding:"2em", margin:"2em", border:"2px solid black", borderRadius:"5px"}}>
        <h4>Customer Info</h4>
        <p><b>Name:</b> {this.props.name}</p>
        <p><b>Phone Number:</b> {this.props.phone}</p>
        <p><b>Email:</b> {this.props.email}</p>
        <p><b>Address:</b> {this.props.address}</p>
        <hr />
        <h4>Order Info</h4>
        <p><b># of Pizzas:</b> {this.props.numPizza}</p>
        <p><b># of Toppings:</b> {this.props.toppingCount}</p>
        {this.props.crustType === '1' &&
        <p><b>Crust Type:</b> Hand Tossed Thin</p>
        }
        {this.props.crustType === '2' &&
        <p><b>Crust Type:</b> Handmade Pan</p>
        }
        {this.props.crustType === '3' &&
        <p><b>Crust Type:</b> Crunchy</p>
        }
        {this.props.pizzaSize === '1' &&
        <p><b>Pizza Size: </b>Small</p>
        }
        {this.props.pizzaSize === '2' &&
        <p><b>Pizza Size: </b>Medium</p>
        }
        {this.props.pizzaSize === '3' &&
        <p><b>Pizza Size: </b>Large</p>
        }
        <p><b>Order Time:</b> {this.props.orderTime}</p>
      </div>
    );
  }
}

export default Order;

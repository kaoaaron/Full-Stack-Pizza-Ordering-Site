import React from 'react';
import OrderForm from './OrderForm'
import OrderDetails from './OrderDetails'
import '../App.css';
import axios from 'axios';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {data:{}, dataFlag:false };
    this.orderData = this.orderData.bind(this);
  }

  //callback function
  orderData(data){
    axios.post("/api/orders", {
      firstName : data.firstName,
      lastName : data.lastName,
      phoneNumber: data.phoneNumber,
      emailAddress : data.emailAddress,
      postalAddress : data.postalAddress,
      crustType: data.crustType,
      toppingCount: data.toppingCount,
      numPizza: data.numPizza,
      pizzaSize: data.pizzaSize
    })
    .then((response) =>{
      this.setState({data:response.data,dataFlag:true})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return(
      <div className="App">
          {this.state.dataFlag ? (
            <OrderDetails data={this.state.data}></OrderDetails>
          ) : (
            <OrderForm popData={this.orderData}></OrderForm>
          )}

      </div>
      
    )
  }

}

export default App;


import React from 'react';

class OrderDetails extends React.Component{

  constructor(props) {
    super(props);
   
  }

  render(){
    return(
      <div className="App">
          <h1>Order Details</h1>
          First Name:{this.props.data.firstName}<br></br>
          Last Name:{this.props.data.lastName}<br></br>
          Phone Number:{this.props.data.phoneNumber}<br></br>
          Email Address:{this.props.data.emailAddress}<br></br>
          Postal Address:{this.props.data.postalAddress}<br></br>
          <hr style={{backgroundColor: "black",height: 1}}/>
          Cost before tax: ${this.props.data.priceBeforeTax}<br></br>
          Cost after tax: ${this.props.data.priceAfterTax}
      </div>
    )
  }

}

export default OrderDetails;


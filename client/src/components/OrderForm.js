import React from 'react';
import axios from 'axios';
import {Col, Button, Navbar, Form } from 'react-bootstrap';

class OrderForm extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = { toppings: null, crust: null, sizes: null, toppingPrice: null,
                   firstName:'', lastName:'', phoneNumber:'', emailAddress:'', postalAddress:'' ,
                   pizzaSize:'',crustType:'', toppingCount:0, numPizza:'1', errorMsg:'', submitForm:false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleChange (event) {
    if(event.target.name === "pizzaSize" || event.target.name === "crustType"){
          this.setState({ [event.target.name]: event.target.id });
    }else if(event.target.name ==="toppingCount"){
      if(event.target.checked){
        this.setState({ [event.target.name]: this.state.toppingCount + 1 });
      }else{
        this.setState({ [event.target.name]: this.state.toppingCount - 1 });
      }
    }
    else{
        this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
      let orderData= {
        firstName:this.state.firstName, lastName:this.state.lastName, emailAddress:this.state.emailAddress, 
        postalAddress:this.state.postalAddress,pizzaSize:this.state.pizzaSize, crustType:this.state.crustType, 
        toppingCount:this.state.toppingCount, numPizza:this.state.numPizza, phoneNumber:this.state.phoneNumber
      }
      this.props.popData(orderData)
  }

  handleConfirm(){
    if(this.state.firstName===''|| this.state.lastName===''|| this.state.emailAddress===''|| this.state.postalAddress===''||
    this.state.pizzaSize===''||this.state.crustType==='' || this.state.phoneNumber===''){
      this.setState({
        errorMsg: "Please check that all fields are complete"
      })
    }else if(!this.state.firstName.match(/^[a-zA-Z ._-]*$/) || !this.state.lastName.match(/^[a-zA-Z ._-]*$/)){
      this.setState({
        errorMsg: "Your name can only consist of letters"
      })
    }else if(!this.state.phoneNumber.match(/^[0-9]*$/)){
        this.setState({
          errorMsg: "Phone number MUST consist of numbers only (no space or special characters)"
        })
    }else if(!this.state.emailAddress.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/)){
      this.setState({
        errorMsg: "Email address is invalid"
      })
    }else if(!this.state.postalAddress.match(/^\d+[a-zA-Z\s]+/)){
      console.log(this.state.postalAddress)
      this.setState({
        errorMsg: "Postal address is invalid"
      })
    }else{
      this.setState({
        errorMsg: "",
        submitForm:true
      })
    }
  }
  
  componentDidMount(){
     axios.get("/api/options")
     .then(res => {
       this.setState({
          toppings: res.data.toppings,
          crust: res.data.crust,
          sizes: res.data.sizes,
          toppingPrice: res.data.toppingPrice
       })
     })
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <img
                alt=""
                src=""
                width="30"
                height="30"
                className="d-inline-block align-top"
              />Pizza Options
            </Navbar.Brand>
          </Navbar>

      <h4>Size</h4>
    
          <Form.Group>
            {this.state.sizes !==null && this.state.sizes.map((value, index) => {
              return (<Form.Check
                name="pizzaSize" value={this.state.pizzaSize} onChange={this.handleChange}
                type="radio"
                inline
                key={index}
                label={`${value.name} ($${value.price})`} 
                id={index+1}
              />)
          })}
          </Form.Group>

          <h4>Crust</h4>
    
          <Form.Group>
            {this.state.sizes !==null && this.state.crust.map((value, index) => {
              return (<Form.Check
                name="crustType" value={this.state.crustType} onChange={this.handleChange}
                type="radio"
                inline
                key={index}
                label={value}
                id={index+1}
              />)
          })}
          </Form.Group>

      <h4>Toppings</h4>
      (${this.state.toppingPrice}/topping)<br></br>
          {this.state.toppings !==null && this.state.toppings.map((value, index) => {
              return (<Form.Check
                inline
                name="toppingCount" value={this.state.toppingCount} onChange={this.handleChange}
                defaultChecked={false}
                key={index}
                label={value}
                id={index}
              />)
          })}
        <br></br><br></br>
        <h4>Number of Pizzas</h4>
        <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Control as="select" multiple={false} name="numPizza" value={this.state.numPizza} onChange={this.handleChange}>
              <option defaultValue>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>


          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <img
                alt=""
                src=""
                width="30"
                height="30"
                className="d-inline-block align-top"
              />Contact Information
            </Navbar.Brand>
          </Navbar><br></br>
          <Form.Row>
            <Col>
               <Form.Label>First Name</Form.Label>
               <Form.Control name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First name" />
            </Col>
           <Col>
             <Form.Label>Last Name</Form.Label>
             <Form.Control name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last name" />
           </Col>
         </Form.Row><br></br>

         <Form.Row>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} type="text" placeholder="Enter phone number" />
            </Col>
            <Col>
              <Form.Label>Email address</Form.Label>
              <Form.Control name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} type="text" placeholder="Enter email" />
            </Col>
          </Form.Row>

          <Form.Group controlId="address">
            <Form.Label>Postal Address</Form.Label>
            <Form.Control name="postalAddress" value={this.state.postalAddress} onChange={this.handleChange} type="text" placeholder="Enter postal address" />
          </Form.Group>

          <br></br>
          <hr style={{backgroundColor: "black",height: 1}}/>
 

          {this.state.submitForm ? (
            <div>
              <h2 style={{color: "red"}}>Warning: Once clicked, your order will be confirmed.</h2>
              <Button variant="danger" type="submit">
                Confirm Order
              </Button>
           </div>
          ) : (
            <Button onClick={this.handleConfirm} variant="success" >
              Submit Form
            </Button>
          )}

   
      </Form>
      {this.state.errorMsg}
    </div>
    )
    
  }

}

export default OrderForm;


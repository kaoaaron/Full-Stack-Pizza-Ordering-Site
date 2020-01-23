import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import '../App.css';
import RippleIcon from '../Spinner/RippleIcon'
import Orders from './Orders'

const blockOptions = ["none", "block"] //div options
const api = "/api/orders"
const errorText = "No results found for "

class OrdersList extends React.Component{

  constructor(props) {
    super(props);
    this.state={
        bookInfo: [],
        sVisibility: blockOptions[0],
        errorMessage: errorText,
        searchText: "hello",
        orderInfo:[]
    }

    this.searchResult = this.searchResult.bind(this)
  }

  //on submit button clicked, fetches data
  searchResult(event,input,option) {
    if(event){
      event.preventDefault()
    }
  
    //show spinner
    this.setState({
        sVisibility: blockOptions[1]
    })

    axios.get(api)
      .then(res => {
        if(option === "0" || input === ""){
            this.setState({
                orderInfo: res.data,
                sVisibility: blockOptions[0],
                errVisibility: blockOptions[0]
            })
        }else if(option === "phone"){
            let tempOrderInfo = []
            for(let i = 0; i < res.data.length; i++){
                if(input === res.data[i].phoneNumber){
                    tempOrderInfo.push(res.data[i])
                }
            }
            this.setState({
                orderInfo: tempOrderInfo,
                sVisibility: blockOptions[0]
            })

        }else if(option === "name"){
            let tempOrderInfo = []
            for(let i = 0; i < res.data.length; i++){
                if(input === res.data[i].firstName || input === res.data[i].firstName){
                    tempOrderInfo.push(res.data[i])
                }
            }
            this.setState({
                orderInfo: tempOrderInfo,
                sVisibility: blockOptions[0]
            })

        }
    })
    .catch(error => {
        this.setState({
            sVisibility: blockOptions[0],
            errVisibility: blockOptions[1]
        })
    });
  }

  componentDidMount(){
    this.searchResult(null,null,"0");
      
  }

  render(){
    return(
      <div>
          <div id="spinnerContainer" style={{display:this.state.sVisibility}}><RippleIcon></RippleIcon></div>
          <SearchBar searchText={this.state.searchText} searchResult={this.searchResult}></SearchBar>
          <Orders id="orders" orderInfo={this.state.orderInfo.slice(0, 10)}></Orders>
      </div>
    )
  }

}

export default OrdersList;


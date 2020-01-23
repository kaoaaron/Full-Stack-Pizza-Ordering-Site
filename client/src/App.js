import React from 'react';
import OrderRedirect from './components/OrderRedirect'
import OrdersList from './components/OrdersList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

let errorPage = ()=>{
  return(
    <div>
      <p>This page doesn't exist</p>
    </div>
  )
}

class App extends React.Component{

  render(){
    return(
      <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/(order|)/" component={OrderRedirect}/>
            <Route path="/orderslist" component={OrdersList}/>
            <Route component={errorPage}/>
          </Switch>
      </BrowserRouter>
      </div>
    )
  }

}

export default App;


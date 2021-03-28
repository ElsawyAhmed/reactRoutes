import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Apis from './apis'
import Login from './login'

// import { Button, Radio } from 'antd';
import Home from './home';
import React from 'react';
import Register from './register';
import ToDoContainer from './ToDoContainer';
class  App extends React.Component{
  constructor(){
    super()
    this.state ={
      route : '/login',
      All :[]
    }
    
  }
  fetchall=async ()=>{
    let arrayofAll = await Apis.listall
    this.setState({ All :arrayofAll})
  }
  render(){
  return (
    <Router>
    
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" /><br/>
          <Link to ='/login'>Login</Link>
          <br/>
          <Link to ='/register'>Register</Link>
          <br/>
          <br/>
          <Link to='/home' >Home</Link>
          <br/>
          <Link to='/todo'>To do List</Link>
          <hr/>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/home'>
              <Home latest={this.state.All}></Home>
          </Route>
          <Route path='/todo'>
            <ToDoContainer></ToDoContainer>
          </Route>
        </Switch>

    </div>
    </Router>
  );
  }
}

export default App;

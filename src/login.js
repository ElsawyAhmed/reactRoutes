import React from 'react'
import { Redirect } from 'react-router';
import Apis from './apis';


class  Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
    }


    render(){
        return (
        <div className="loginPage">
          <div className="container">
            <div className="form">
                    <input type="text" placeholder="username" id="user"  onChange={(e)=>{this.setState({username:e.target.value})}}/>
                    <input type="password" placeholder="password" id="pass" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    <button onClick={()=>{let user = {username:this.state.username,password:this.state.password};Apis.login(user)}}>login</button>
               
            </div>
            <button onClick={()=>{<Redirect to ='/register' />}}>redirect</button>
         </div>
            <div className="footer">
                <span>Contact Us </span>
                <span>Terms </span>
                <span>About Us</span>
            </div>
      </div>
        )
    }

}
export default Login;
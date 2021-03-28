import React from 'react'
import Apis from './apis';


class  Register extends React.Component{
    constructor(){
        super()
        this.state = {
                username:'',
                firstname:'',
                lastname:'',
                password:'',
                birthDate:''
            
        }
    }

    render(){
        return (
        <div className="loginPage">
           <div id="form">
                username:
                <input id="username" placeholder="username" onChange={(e)=>{this.setState({username:e.target.value})}}/>
                <br/>
                first name:
                <input id="First-name" placeholder="First name" onChange={(e)=>{this.setState({firstname:e.target.value})}}/>
                <br/>
                last name:<input id="last-name" placeholder="last-name" onChange={(e)=>{this.setState({lastname:e.target.value})}}/>
                <br/>
                Password: <input type="password"  id="pass" onChange={(e)=>{this.setState({password:e.target.value})}}/><br/>
                <br/>
                Birth Date:<input id="Birth-Date" placeholder="Birthday" type="date" onChange={(e)=>{this.setState({birthDate:e.target.value})}}/>
                <br/>
                <button onClick={()=>{let user={username:this.state.username,password:this.state.password,firstname:this.state.firstname,lastname:this.state.lastname,birthDate:this.state.birthDate };
                                     Apis.register(user);}}>
                        Register
                </button>
                <br/>
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
export default Register;
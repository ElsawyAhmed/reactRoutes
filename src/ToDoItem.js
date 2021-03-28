import { render } from '@testing-library/react'
import React from 'react'


class ToDoTasks extends React.Component{
    constructor(){
        super()
        this.state={
            bgcolor:'green'
        }
    }
    toggle=(e)=>{

        e.target.style.backgroundColor=='aqua'? 
        e.target.style.backgroundColor='white': 
        e.target.style.backgroundColor='aqua'
    }
    highlight=(e)=>{
        e.target.parentNode.firstChild.style.backgroundColor=='yellow'?
        e.target.parentNode.firstChild.style.backgroundColor='white':
        e.target.parentNode.firstChild.style.backgroundColor='yellow'
    }
    deleteme=(e)=>{
        let task = e.target.previousElementSibling.innerText
        console.log(e.target.previousElementSibling.innerText)
        this.props.deletetask(task)
    }
     render(){
         return(
            <div>
                <span onClick={this.toggle}>{this.props.text}</span>
                <span onClick={this.deleteme} style={{backgroundColor:'red',borderRadius:50}} className="glyphicon glyphicon-remove"></span>
                <span onClick={this.highlight}>Highlight</span>
            </div>
            
         )
     }
}
export default ToDoTasks;
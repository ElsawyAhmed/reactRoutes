import { render } from '@testing-library/react'
import React from 'react'


class ToDoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            task : ''
        }
       
    }
    addAction=()=>{
        this.props.action(this.state.task)
        this.setState({task:''})
    }
    
     render(){
         return(
            <div>
                <span className="glyphicon glyphicon-pencil"></span>
                <input type="txt" value={this.state.task} onChange={(e)=>this.setState({task:e.target.value})}>
                </input>
                <button onClick={this.addAction} className="glyphicon glyphicon-plus">
                </button>
            </div>
         )
     }
}
export default ToDoForm;
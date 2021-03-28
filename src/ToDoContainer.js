import React from 'react'
import './container.css'
import ToDoHead from './ToDoHead'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class ToDoContainer extends React.Component{


    render(){
        return(
            <div>
                <ToDoHead></ToDoHead>
                <ToDoApp />
                <div className='footer'>Footer</div>
            </div>
        )
    }
}
class ToDoApp extends React.Component{
    constructor(){
        super()
        this.state = {
            tasks: []
        }
    }
    addTask=(task)=>{
        this.state.tasks.push(task)
        this.setState({tasks:this.state.tasks})
      
    }
    deleteTask=(task)=>{
        let index = this.state.tasks.indexOf(task)
        this.state.tasks.splice(index,1)
        this.setState({tasks:this.state.tasks})
      
    }
    render(){
        return(
            <div>
                ToDoApp
                <ToDoList list={this.state.tasks} delete={this.deleteTask}></ToDoList>
                <ToDoForm action={this.addTask}></ToDoForm>
            </div>
        )
    }
  
}





export default ToDoContainer;
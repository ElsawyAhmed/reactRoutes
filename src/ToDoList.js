import { render } from '@testing-library/react'
import React from 'react'
import ToDoTasks from './ToDoItem'



class ToDoList extends React.Component{


   
     render(){
         return(
             <div>
                {this.props.list.map((listItem,index)=>{
                    return <ToDoTasks key={index} deletetask={this.props.delete} text={listItem}/>})
                }
            </div>
         )
     }
}
export default ToDoList;
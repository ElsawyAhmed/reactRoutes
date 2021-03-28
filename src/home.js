import { changeConfirmLocale } from 'antd/lib/modal/locale';
import React from 'react'
import Apis from './apis';



class Home extends React.Component{
    constructor(){
        super()
        this.state={

            arr : [{}]
        }
    }
    chan=async()=>{
        let newarr= await Apis.listall()
        await this.setState({arr:newarr})
    }

    render(){
        return (
            <div>
                <button onClick={this.chan}>fetch</button>
           
            <div className="homedisplay" >
                
                {this.state.arr.map((items,index)=>{
                    return <div className='videocard' key={index}>
                                <img src={items.imgUrl}  alt="Movie Poster"/>
                                <h3>{items.title}</h3>
                                <button className="btn-info" >View Movie</button>
                           </div>
                })}
            </div>
            </div>
        )
    }

}
export default Home;
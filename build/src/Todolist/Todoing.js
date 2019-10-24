import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todoinput from './Todoinput';
export default class Todoing extends Component {
    
    render() {
        return (
            <div>
                <h1>正在进行 
                    {
                        this.props.todo.filter(item => {return item.status === this.props.status}).length
                    }
                </h1>
                <ul  >
                    {
                        this.props.todo.map((item,idx)=><li key={idx} ><input type='checkbox' checked={false} onClick={()=>{this.props.changeCheck1(idx)}} /><input type='text' value={item} ></input><button onClick={()=>{this.props.delTodo1(idx)}}> 删除</button></li>)
                    }
                </ul>


                <h1> 已经完成
                    {
                        this.props.todo2.filter(item => {return item.status === this.props.status}).length
                    }
                </h1>
                <ul  >
                    {
                        this.props.todo2.map((item,idx)=><li key={idx} ><input type='checkbox' checked onClick={()=>{this.props.changeCheck2(idx)}} /><input type='text' value={item} ></input><button onClick={()=>{this.props.delTodo2(idx)}}> 删除</button></li>)
                    }
                </ul>
                  
            </div>


        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todoinput from './Todoinput';
export default class Todoing extends Component {
    render() {
        function change1(){
            
            
        }
        function change2(){
                        
        }
        function delTodo(idx){
            
        }
        return (
            <div>
                <h1>正在进行</h1>
                <ul className="list1" >
                    {
                        this.props.todo.map((item,idx)=><li key={idx} style={{marginTop:'5px',display:''}}><input type='checkbox' onClick={change1} /><input type='text' value={item} ></input><button onClick={()=>{this.props.delTodo(idx)}}> 删除</button></li>)
                    }
                </ul>
                <h1>已完成</h1>
                <ul className="list2">
                    {
                        this.props.todo.map((item,idx)=><li key={idx} style={{marginTop:'5px',display:''}}><input type='checkbox' onClick={change2}  checked/><input type='text' value={item} ></input><button onClick={()=>{this.props.delTodo(idx)}}> 删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array
}
Todoing.defaultProps = {
    todo: [2,3,4],
    a: 100
}
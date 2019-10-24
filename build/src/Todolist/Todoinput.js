import React, { Component } from 'react';
import storage from './storage';

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            n: '',
        }
    }
    handleInput=(e)=>{
        if(e.keyCode === 13){
            this.props.addTode(e.target.value);
            this.setState({
                n:''
            });
            
        }
        
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
        storage.set('key',e.target.value);
    }
    render() {
        return (
            <div>
                <label htmlFor="inp">ToDoList：</label>
                <input name='n' id="inp" required="required" onChange={(e)=>this.handleChange(e)} value={this.state.n} onKeyDown={(e)=>this.handleInput(e)} type='text' placeholder='添加ToDo'></input>
            </div>
        )
    }
}



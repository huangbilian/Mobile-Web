import React, { Component } from 'react';
import storage from './storage';

//子组件----->父组件 传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数

//受控组件和非受控组件

//value值被react状态控制
//可以方便拿到input 的值
//实时获取或处理输入的值
/*export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            n1: 0,
            n2: 0
        }
    }
    handleInput=(e)=>{
        if(e.keyCode === 13){
            this.props.addTode(e.target.value);
        }
    }
    handleChange = (e)=>{

        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }
    render() {
        return (
            <div>
                <input name='n1' onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type='text'></input>
                +
                <input name='n2' onChange={(e)=>this.handleChange(e)} value={this.state.n2} onKeyDown={(e)=>this.handleInput(e)} type='text'></input>
                <p>{this.state.n1+this.state.n2}</p>
                <button>查询</button>
            </div>
        )
    }
}*/
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


//非受控组件
//代码简单、比较适用于一次性获取表单的值
/*export default class Todoinput extends Component {
    componentDidMount(){
        console.log(this.inp.value);
        //console.log(this.refs);
    }
    search = () =>{
        //console.log(this.inp.value);
        this.props.addTode(this.inp.value);
    }
    render() {        
        return (
            <div>
                <input ref={inp=>this.inp = inp} type="text"/>
                <button onClick={this.search}>查询</button>
            
            </div>
        )
    }
}
*/

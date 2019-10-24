import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';

export default class Todolist extends Component {
    constructor(props){
		super(props);
		this.state = {
            //todo: (localStorage.getItem('todo') || '').split(','),
            //todo2:(localStorage.getItem('todo2') || '').split(','),
            todo: localStorage.getItem('todo')?localStorage.getItem('todo').split(','):[],
            todo2: localStorage.getItem('todo2')?localStorage.getItem('todo2').split(','):[],

        }
        
        
    }
    addItem=(msg)=>{
        var todo = [...this.state.todo];
        this.setState({
            todo: [...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',this.state.todo);
        })
        //添加但不在页面显示
        /*this.state.todo.push(msg);
        console.log(this.state.todo)*/
        console.log(msg);
    }
    delItem1 = (a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2、setState是异步的
        // this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({
            todo
        },()=>{
            localStorage.setItem('todo',this.state.todo);
        })
    }
    delItem2 = (a)=>{
        var todo2 = [...this.state.todo2];
        todo2.splice(a,1);
        //2、setState是异步的
        // this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({
            todo2
        },()=>{
            localStorage.setItem('todo2',this.state.todo2);
        })
    }
    changeCheck1 = (a)=>{
        var todo = [...this.state.todo];
        var todo2 = [this.state.todo2];
        var t = todo[a];
        todo.splice(a,1);
        this.setState({
            //ischecked:true,
            todo,
            todo2:[...this.state.todo2,t],
        },()=>{
            localStorage.setItem('todo',this.state.todo);
            localStorage.setItem('todo2',this.state.todo2);
        })
    }
    changeCheck2 = (a)=>{
        var todo = [this.state.todo];
        var todo2 = [...this.state.todo2];
        var t = todo2[a];
        todo2.splice(a,1);
        this.setState({
            //ischecked:false,
            todo2,
            todo:[...this.state.todo,t],
        },()=>{
            localStorage.setItem('todo2',this.state.todo2);
            localStorage.setItem('todo',this.state.todo);
        })
    }
    
    render() {
        return (
            <div>
                <Todoinput addTode={this.addItem}/>
                <Todoing  changeCheck1={this.changeCheck1} changeCheck2={this.changeCheck2} delTodo1={this.delItem1} delTodo2={this.delItem2} todo={this.state.todo} todo2={this.state.todo2}/>
            </div>
        )
    }
}


import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';

export default class Todolist extends Component {
    constructor(props){
		super(props);
		this.state = {
            todo: (localStorage.getItem('todo') || '').split(','),
        }
        
        //var arr = [1,2,{a:100}];
        //浅拷贝
        //var b = [...arr]; 
        //深拷贝
        /*var b = JSON.parse(JSON.stringify(arr))
        b[2].a=200;
        console.log(arr);*/

        //对象的拷贝
        /*var a = {a:100};
        var b = {b:200};
        //var o = Object.assign({},a);
        var o = Object.assign(a,b);
        //var o = Object.assign({},a,b);
        console.log(o);
        console.log(o===a);

        var a = {a:100,b:200};
        //Object.keys返回由属性名组成的一个数组
        Object.keys(a).forEach((item)=>{
            console.log(item);
            console.log(a[item]);
        })
        //尽量不用for in
        /*for(var item in a){
            console.log(a);
        }*/
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
    delItem = (a)=>{
        // this.state.todo.splice(a,1);//不要写
        //深拷贝\浅拷贝
        //状态（state）
        //1、不要直接改变、处理状态
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2、setState是异步的
        // this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({
            todo
        },()=>{
            localStorage.setItem('todo',this.state.todo);
        })
        console.log(a);
    }
    /*checkBox = (a)=>{
        var todo = [...this.state.todo];
        
        this.setState({
            todo
        },()=>{
            localStorage.setItem('todolist',todo);
        })
    }*/
    render() {
        return (
            <div>
                <Todoinput addTode={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import ShowTime from './ShowTime';//后缀默认js，可省略
import Todolist from './Todolist/Todolist';
import Request from './Request';
//import {ShowTime} from './ShowTime';

//组件交互
//父组件--->子组件：调用时在子组件上添加属性
//在子组件中通过props获得数据
//ReactDOM.render(<ShowTime word="react"/>,document.getElementById('root'));
//ReactDOM.render(<Todolist/>,document.getElementById('root'));
ReactDOM.render(<Request/>,document.getElementById('root'));


//类定义组件
/*class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
        
    }
    render(){
        console.log('render');

        return (
            <Fragment>
                <div>{this.state.time}</div>
                <div>hello{this.props.word}</div>
            </Fragment>
        );
    }
}*/
//ReactDOM.render(<Hello word="react"/>,document.getElementById('root'));



//jsx 表达式会被 react 转成一个对象
/*var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react'
    )
);
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: ['hello',{
            type: 'h1',
            props: {
                id: 'h',
                class: 'h',
                children: ['react']
            }
        }]
    }
}


//自己声明reader函数，实现页面渲染
function render(obj,container){
    var {type,props} = obj;
    //文档碎片
    var fr = document.createDocumentFragment();
    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] === 'object'){
                    render(props[item][i],ele);
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }


    fr.appendChild(ele);
    container.appendChild(fr);
}*/
//render(obj,document.getElementById('root'));
//var ele = <h1>hello</h1>
//ReactDOM.render(ele, document.getElementById('root'));

//serviceWorker.unregister();


//函数定义组件(无生命周期函数)
//当只是渲染结构时
/*function Todo(props){
    return(
        <div>
            {/*条件渲染 }
            {props.list.length>=6?<h1>todo</h1>:''}
            {props.list.length>=5 && <h1>todo</h1>}
            <ul>
                {/*循环渲染 }
                {
                    props.list.map((item,index)=>index%2===0&&<li key={item}>{item}></li>)
                      
                }
            </ul>
        </div>
    );
}
var item = [1,2,3,4,5];
ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));*/
    //react元素创建后不可改变
/*function tick() { 
    const ele = <div><P>当前时间</P><h1>{new Date( ).toLocaleTimeString( )}</h1></div> ; 
    ReactDOM.render(ele, document.getElementById('root')); 
}
tick();
setInterval(tick, 1000);*/
    
/*var str = '<h1>hello</h1>'+'';
ele.innerHTML = str;*/
//页面回流(重排)：内容改变、大小改变、结构改变
//页面重绘(把字体颜色、背景颜色等样式改变)
//display width height font-
//回流多次
// document.body.style.width = '';
// document.body.style.height = '';
//声明css的一个类，用这种方式只回流一次
/*.change{
    width:;
    innerHeight;
}
document.body.className = 'change';*/
//node.offsetLeft/node.offstRight 等慎用
/*var root = document.getElementById('root');
var width = root.offsetWidth;
setInterval(function(){
    width += 1;
    root.style.width = width+'px';
},100);*/

//加载html文件,浏览器解析html生成dom资料
//link加载css文件，解析css规则，和DOM树结合生成render tree(渲染树）,浏览器渲染引擎渲染render tree



//对节点的操作先用变量代替
/*console.time('a');
var str = '';
for(var i=0;i<1000;i++){
    str += '<li>'+i+'</li>';
}
document.body.innerHTML = str;
console.timeEnd('a');*/

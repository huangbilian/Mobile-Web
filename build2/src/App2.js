import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect,withRouter} from 'react-router-dom';

import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import Sider from './Sider';
import {Button} from 'antd';
import NoMatch from './NoMatch';
import Userinfor from './Router/Userinfor';
import Topic from './Router/Topic';
import Hooks from './Router/Hooks';
//antd 使用
//1.下载安装antd框架: npm i antd
//2.在某个css里引入 antd 的 css: @import '~antd/dist/antd.css'
//3.在需要的组件内import相应的组件，然后使用

function Login(props){
    console.log(props);
    return <button>登录</button>
}
let LoginWithRouter = withRouter(Login);

export default class App extends Component {
    render() {
        //所有路由的组件都得放在BrowerRouter
        //BrowerRouter里只能有一个子元素
        return (
            <Router basename='todolist'>
                <div>
                    <Sider/>
                    {/* <Button type="primary">Primary</Button> */}
                    <div style={{marginLeft: 50,float: 'left',border: '2px solid red'}}>
                        <Switch>
                            <Route exact path='/' render={()=><Todolist/>} />
                            <Route path='/hoc' component={Hoc} />
                            <Route path='/request' component={Request}/>
                            <Route path='/userinfor/:id' component={Userinfor}/>
                            <Route path='/topic/:page' component={Topic} />
                            <Route path='/hooks/:id' component={Hooks}/>
                            <Redirect from='/old' to='hoc' />
                            <Route path='*' component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
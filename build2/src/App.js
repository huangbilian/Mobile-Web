import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Login from './container/Login';
import Article from './container/home/Article';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />
                            <Route path='/topic/:page' component={Article}></Route>
                        </div>
                        <div className="sider">
                            <p style={{marginTop:'15px',color:'black'}}>&nbsp;&nbsp;CNode：Node.js专业中文社区</p>
                            <p>&nbsp;&nbsp;您可以   登录   或   注册，也可以</p>
                            <button style={{width:200,height:40,backgroundColor:'#6ca9ee',color:'white',border:'1px solid white',borderRadius:'5px',outline:'none',marginLeft:'30px'}}>登录</button>
                            <br/>
                            <img src={require('./images/1.jpg')} />
                            <img src={require('./images/2.jpg')} />
                            <img src={require('./images/3.jpg')} />
                            <p style={{marginTop:'20px',color:'black',backgroundColor:'rgb(211, 208, 208)'}}>无人回复的话题</p>
                            <p>node安装完成后npm -v检查报错</p>
                            <p>一种支持插件式开发的命令行工具开发模式</p>
                            <p>npm install githubUser/project 有没有方法可以加速</p>
                            <p>nodejs解析http协议源码解析</p>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
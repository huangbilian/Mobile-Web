import React, { Component } from 'react'
import { genPercentAdd } from 'antd/lib/upload/utils'

export default function Login(props){
    
        function login(){
            props.history.push('/home')
        }
        return (
            <div>
                <div className='loginheader'>
                    <a style={{color:'green'}} onClick={login}>主页</a>
                    <a style={{color:'gray'}}>/</a>
                    <a style={{color:'gray'}}>登录</a>
                </div>
                <div className='logincenter'>
                    <p>
                        用户名:&nbsp;&nbsp;<input type="text"/>
                    </p>
                    <p>
                        &nbsp;&nbsp;密码:&nbsp;&nbsp;&nbsp;<input type="password"/>
                    </p>
                    <p>
                        <button onClick={login}>登录</button>
                    </p>
                </div>
            </div>
            
        )
    
}

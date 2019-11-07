import React, { Component } from 'react'

export default function Start(props){
    function login(){
        props.history.push('/home')
    }
    return (
        <div>
            <div className='loginheader'>
                <a style={{color:'green'}} onClick={login}>主页</a>
                <a style={{color:'gray'}}>/</a>
                <a style={{color:'gray'}}>Node.js新手入门</a>
            </div>
            Start
        </div>
    )
}

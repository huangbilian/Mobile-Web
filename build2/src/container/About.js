import React, { Component } from 'react'

export default function About(props){
    function login(){
        props.history.push('/home')
    }
    return (
        <div>
            <div className='loginheader'>
                <a style={{color:'green'}} onClick={login}>主页</a>
                <a style={{color:'gray'}}>/</a>
                <a style={{color:'gray'}}>关于</a>
            </div>
            About
        </div>
    )
    
}

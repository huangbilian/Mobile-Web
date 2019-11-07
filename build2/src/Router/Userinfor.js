import React from 'react';

export default function Userinfor(props){
    console.log(props);
    function goTodo(){
        props.history.push('/');
    }
    return (
        <div>
            <p>name:zhangsan</p> 
            <p>id:{props.match.params.id}</p>
            <button onClick={goTodo}>跳转到Todolist</button>
        </div>
    )
}

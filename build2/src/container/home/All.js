import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class All extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.location.search;
        fetch('https://cnodejs.org/api/v1/topics'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log(res.data);
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.location.search !== this.props.location.search){
            let page = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                    console.log(res.data);
                })
        }
    }
    render() {
        var arr=[1,2,3,4,5,6,7,8,9,10];
        //var last=this.props.location.search.split("&")[0];
        var list=this.props.location.search.split("&")[0] ? this.props.location.search.split("&")[0] : '?tab=all';
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div className='atitle'>
                            <img src={item.author.avatar_url}></img>
                            <Link style={{color:'gray',marginLeft:'10px'}}>{item.reply_count}</Link>
                            <Link style={{color:'rgb(211, 208, 208)',fontSize:'60%'}}>/{item.visit_count}</Link>
                            <Link style={{color:'white',backgroundColor:'green',marginLeft:'15px'}}>置顶</Link>
                            <Link to={'/topic/'+item.id} style={{color:'black',fontSize:'115%',overflow:'hidden'}}>{item.title}</Link>
                            <Link style={{float:'right',marginRight:'22px',fontSize:'90%',color:'gray'}}>3分钟前</Link>
                        </div>
                    ))
                }
                {/* <div className='pagination'>
                    <ul>
                        <li>1</li>
                        <li onClick=''>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                    </ul>
                </div> */}
                {
                    arr.map((item)=>(
                        <li className="pagination"><Link to={`${list}&page=${item}`}>{item}</Link></li>)
                    )
                }
            </div>
        )
    }
}
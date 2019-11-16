import React, { Component } from 'react'
import { NavBar,Carousel, WingBlank } from 'antd-mobile';

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['hlunbo1', 'hlunbo2'],
            });
        }, 100);
    }
    render() {
        return (
            <div >
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}>住吧家居</NavBar>


                <WingBlank style={{margin:'0'}}>
                    <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`images/${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />

                        </a>
                    ))}
                    </Carousel>
                </WingBlank>

                <div className='hp'>
                    <img src='images/hp1.jpg'></img>
                    <img src='images/hp2.jpg'></img>
                    <img src='images/hp3.jpg'></img>
                </div>

                <div className="htj">
                    <p style={{borderLeft:'5px solid #3fcccb',fontSize:'bold',marginTop:'2%',marginBottom:'2%'}}> 热门推荐</p>
                    <img src='images/ht.jpg'></img>
                </div>
                
            </div>
        )
    }
}
import React, { Component } from 'react'
import { NavBar,Icon,Drawer, List,SearchBar,WingBlank,Carousel,Grid } from 'antd-mobile';
let data1 = [
    {
      icon: "images/sz.jpg",
      text: "桌"
    },
    {
      icon: "images/sc.jpg",
      text: "床"
    },
    {
      icon: "images/sy.jpg",
      text: "椅"
    },
    {
      icon: "images/sj.jpg",
      text: "几"
    },
    {
      icon: "images/sg.jpg",
      text: "柜"
    },
    {
      icon: "images/ss.jpg",
      text: "书架"
    },
    {
      icon: "images/sf.jpg",
      text: "沙发"
    },
    {
      icon: "images/sp.jpg",
      text: "家居饰品"
    },
    {
      icon: "images/sh.jpg",
      text: "户外家居"
    },
    {
      icon: "images/sq.jpg",
      text: "全部分类"
    }
];

export default class AppShop extends Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 176,
        open: true,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['sbanner', 'sbanner','sbanner','sbanner'],
            });
        }, 100);
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render() {
        const sidebar = (<List>
            {['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'].map((i, index) => {
              return (<List.Item key={index}
              >{index}</List.Item>);
            })}
          </List>);

        return (
            <div style={{position:'relative'}}>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        // <Icon key="0"  style={{color:'#fff', marginRight: '16px' }} />,
                        <img src='images/car.svg' style={{width:'30px'}}/>
                    ]}
                >商城</NavBar>
                <div style={{backgroundColor:'rgba(204,204,204,0.2)',position:'absolute',top:'45px',height:'35px',width:'100%',zIndex:5}}>
                    <div style={{width:'10%',textAlign:'center',backgroundColor:'rgba(0,0,0,0.2)',height:'100%',float:'left',paddingTop:'5px'}}>
                        <img style={{width:'100%'}} src='images/search.png'/>
                    </div>
                    <SearchBar style={{width:'90%',height:'100%',backgroundColor:'rgba(0,0,0,0.2)',float:'left'}} placeholder="输入关键字搜索"/>
                </div>
                <WingBlank style={{margin:'0',position:'relative'}}>
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
                <WingBlank style={{margin:'0'}}>
                
                    {/* <Drawer   
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight }}
                        enableDragHandle
                        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >
                    </Drawer> */}
                </WingBlank>


                <Grid
                    style={{ background: "#fff"}}
                    data={data1}
                    columnNum={5}
                    renderItem={dataItem => (
                    <div >
                        
                        <img src={dataItem.icon} style={{width: '50%',
                            height: '50%',borderRadius:'50%'
                            }}></img>
                        
                        <div style={{ color: "#888", fontSize: "100%" }}>
                            <span >{dataItem.text}</span>
                        </div>
                    </div>
                    )}
                />

                <div className="sd">
                    <div className="sd1">
                        <img src='images/so1.jpg'></img>
                        <span style={{fontSize:'70%'}}>Top Art Studio 欧式风格精细...</span>
                        <br/>
                        <span style={{fontSize:'90%'}}>￥39.95</span>
                    </div>

                    <div className="sd1">
                        <img src='images/so2.jpg'></img>
                        <span style={{fontSize:'70%'}}>顺顺工艺欧式风格塑料外框黑...</span>
                        <br/>
                        <span style={{fontSize:'90%'}}>￥83.99</span>
                    </div>
                </div>

                <div className="sd2">
                <   img src='images/so3.jpg'></img>
                </div>

                
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavBar,Icon,Tabs, WhiteSpace,Card } from 'antd-mobile';
export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar                  
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        // <Icon key="0"  style={{color:'#fff', marginRight: '16px' }} />,
                        <img src='images/shezhi.svg' style={{width:'30px'}}/>
                    ]}
                >我的</NavBar>

                <div className="mtop">
                    <img src="images/mtop.jpg"></img>
                </div>

                <Card full  style={{float:'left',width:'100%'}}>
                    <Card.Header
                        title="Markeloff  /A/"
                        
                    />
                     <Card.Footer content="这个人很懒，什么签名都没留下"  />
                </Card>
            </div>
        )
    }
}

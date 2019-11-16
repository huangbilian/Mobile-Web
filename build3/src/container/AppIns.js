import React, { Component } from 'react';
import { NavBar,Icon,Tabs, WhiteSpace } from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '彪' },
    { title: '' },
  ];

export default class AppIns extends Component {
    renderContent = tab =>
    (<div className='ins'>
        <div className='ins1'>
            <img src='images/ins1.jpg'></img>
            <img src='images/ins2.jpg'></img>
        </div>
        <div className='ins1'>
            <img src='images/ins3.jpg'></img>
            <img src='images/ins4.jpg'></img>
        </div>
        <div className='ins1'>
            <img src='images/ins5.jpg'></img>
            <img src='images/ins6.jpg'></img>
        </div>
                
    </div>);
    render() {
        return (
            <div>
                <NavBar                  
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{color:'#fff', marginRight: '16px' }} />,
                    ]}
                >灵感</NavBar>

                    {/* initialPage={0}
                    tabBarActiveTextColor='#535353'
                    tabBarUnderlineStyle={{border:'2px solid #ffdb2c'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }} */}
                <Tabs tabs={tabs} initialPage={0} style={{fontSize:'10px'}}  tabBarActiveTextColor='#3fcccb' tabBarUnderlineStyle={{border:'none'}} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                </Tabs>
                {/* <WhiteSpace /> */}

                {/* <div className='ins'>
                    <div className='ins1'>
                        <img src='images/ins1.jpg'></img>
                        <img src='images/ins2.jpg'></img>
                    </div>
                    <div className='ins1'>
                        <img src='images/ins3.jpg'></img>
                        <img src='images/ins4.jpg'></img>
                    </div>
                    <div className='ins1'>
                        <img src='images/ins5.jpg'></img>
                        <img src='images/ins6.jpg'></img>
                    </div>
                </div> */}

            </div>
        )
    }
}

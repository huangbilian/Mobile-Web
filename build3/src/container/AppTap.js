import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppIns from './AppIns';
import AppShop from './AppShop';
import AppMy from './AppMy';

export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#2c2c2c"
          tintColor="#3fcccb"
          barTintColor="white"
         
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(images/shouye1.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(images/shouye2.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            //badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
            <AppHome />
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/linggan1.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/linggan2.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="灵感"
            key="inspiration"
            //dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* {this.renderContent('inspiration')} */}
            <AppIns />
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/shangcheng1.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/shangcheng2.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="shop"
            //badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
            <AppShop />
          </TabBar.Item>
          
          <TabBar.Item
            icon={{ uri: 'images/wode1.svg' }}
            selectedIcon={{ uri: 'images/wode2.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
            <AppMy />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
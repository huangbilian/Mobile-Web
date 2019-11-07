import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './home/All';
import Good from './home/Good';
import Share from './home/Share';
import Job from './home/Job';
import Question from './home/Ask';

export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        return (
            <div>
                <div className='homeheader'>
                    {/* <Link to='/home/all'>全部</Link>
                    <Link to='/home/good'>精华</Link>
                    <Link to='/home/share'>分享</Link>
                    <Link to='/home/job'>招聘</Link> */}

                    {/* <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/ask'}>问答</Link>
                    <Link to={url+'/job'}>招聘</Link> */}

                    <Link to={url+'?tab=all'}>全部</Link>
                    <Link to={url+'?tab=good'}>精华</Link>
                    <Link to={url+'?tab=share'}>分享</Link>
                    <Link to={url+'?tab=ask'}>问答</Link>
                    <Link to={url+'?tab=job'}>招聘</Link> 
                </div>
                <div>
                    {/* <Route path='/home/all' component={All} />
                    <Route path='/home/good' component={Good} />
                    <Route path='/home/share' component={Share} />
                    <Route path='/home/job' component={Job} />
                    <Route path='/home/:tab' component={List} /> */}

                    <Route path={`${url}`} component={All} />
                    {/* <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/share`} component={Share} />
                    <Route path={`${url}/ask`} component={Question} />
                    <Route path={`${url}/job`} component={Job} /> */}
                    
                </div>
            </div>
        )
    }
}
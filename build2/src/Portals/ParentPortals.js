import React, { Component } from 'react'
import Portals from './Portals'

export default class  extends Component {
    cli =()=>{
        console.log('ParentPortals click');
    }
    render() {
        return (
            <div onClick={this.cli}>
                <Portals><h1>MUSIC</h1></Portals>
                <Portals><li>lll</li></Portals>
            </div>
        )
    }
}

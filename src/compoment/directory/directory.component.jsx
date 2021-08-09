import React, { Component } from 'react';
import items from '../../assets/cloths/cloths.asset';

import MenuItem from '../menu-item/menuItem.component'

import './directory.styles.scss'

class Directory extends Component {


    render() {
        return (
            <div className="directory-menu">
                {items.map(({ id, ...section }) => <MenuItem key={id} {...section}/>)}
            </div>
        );
    }
}

export default Directory ;
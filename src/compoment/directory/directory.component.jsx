import React, { Component } from 'react';
import items from '../../assets/cloths/cloths.asset';

import MenuItem from '../menu-item/menuItem.component'

import './directory.styles.scss'

class Directory extends Component {


    render() {
        return (
            <div className="directory-menu">
                {items.map(({ id, title, imageUrl,size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)}
            </div>
        );
    }
}

export default Directory ;
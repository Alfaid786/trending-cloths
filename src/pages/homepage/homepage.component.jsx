import React, { Component } from 'react';

import Directory from '../../compoment/directory/directory.component';

import './homepage.styles.scss';

class Homepage extends Component {
    render() {
        return (
            <div className='homepage'>
                <Directory />
            </div>
        );
    }
}

export default Homepage;
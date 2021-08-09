import React, { Component } from 'react';
import SHOP_DATA from '../../assets/cloths/shopdata.asset.js';
import CollectionPreview from '../../compoment/collection-preview/collection-preview.component'

class ShopPage extends Component {
    render() {
        return (
            <div className='shop-page'>
                {SHOP_DATA.map(({ id, ...otherProps }) =>
                    <CollectionPreview key={id} {...otherProps}/>)}
            </div>
        );
    }
}

export default ShopPage;
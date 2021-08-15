import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import {ReactComponent as ShoppingIcon} from '../../assets/svgFiles/shopping-bag.svg'

import {toggleCartHidden} from '../../redux/cart/cartActions'
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemsCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon className='shopping-icon' />
    {console.log(itemsCount)}
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector  ({
  itemsCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)

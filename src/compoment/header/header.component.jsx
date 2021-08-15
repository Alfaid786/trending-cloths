import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/svgFiles/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser} from '../../redux/user/user.reselect'
import {setCartHidden } from '../../redux/cart/cart.selector'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                {currentUser ? <Link className="option" to='/#' onClick={()=>auth.signOut()}>SIGN OUT</Link> :
                <Link className="option" to='/signin' >SIGN IN</Link>}
                <CartIcon className="logo"/>
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector( {
        currentUser:selectCurrentUser,
    hidden:setCartHidden,
})

export default connect(mapStateToProps)(Header)

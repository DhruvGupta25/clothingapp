import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';
const CartDropdown =({cartItems, history, dispatch})=>(
    <CartDropdownContainer>
        <CartItemsContainer>
         {  
            cartItems.length ?
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
           : (<EmptyMessageContainer>Your Cart is Empty</EmptyMessageContainer> 
           )}   
        </CartItemsContainer>
        <div>
            <CartDropdownButton
            onClick={()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CartDropdownButton>
        </div>
        </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
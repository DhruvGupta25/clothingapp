import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from '../withRouter/withRouter.component.jsx';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import './cart-dropdown.styles.css';
const CartDropdown =({cartItems, navigate, dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items' >
         {  
            cartItems.length ?
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
           : (<span className='empty-message'>Your Cart is Empty</span> 
           )}   
        </div>
        <div>
            <CustomButton 
            onClick={()=> {
                navigate('/checkout');
                dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>
        </div>
        </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { addItem, removeItem } from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, ImageContainer, ImageContainerImage, ArrowContainer, ValueContainer, QuantityContainer, NameContainer, PriceContainer,RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem =({ cartItem, clearItem, addItem, removeItem })=>{
     const { name, imageUrl, price, quantity} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <ImageContainerImage src={imageUrl} alt='item' />
        </ImageContainer>
        <NameContainer>{name}</NameContainer>
        <QuantityContainer>
            <ArrowContainer onClick={()=> removeItem(cartItem)}>&#10094;</ArrowContainer>
            <ValueContainer>{quantity}</ValueContainer>
            <ArrowContainer onClick={()=> addItem(cartItem)}>&#10095;</ArrowContainer>
        </QuantityContainer>
        <PriceContainer>${price}</PriceContainer>
        <RemoveButtonContainer onClick={()=> clearItem(cartItem)}>
         &#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
    );
};
const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JzvcLSCctTtA47D561lEBSpA8PakqHRmR6RiVKhZjKvIZUBarP38Za0gcI9V6G5IcNi5D7vURNhASxBGuPDoUpI0037R2f66r';
    const onToken= token =>{
        console.log(token)
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
         label='Pay Now'
         name ='JWL Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://i.pinimg.com/222x/28/6e/0f/286e0f459d95e857e9575b04bc3c3266.jpg'
         description={`Your total is $${price}`} 
         amount={priceForStripe}
         panelLabel='Pay Now'
         token ={onToken}
         stripeKey={publishableKey}       
        />
)
};

export default StripeCheckoutButton;
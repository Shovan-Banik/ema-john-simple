import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    // const cart=props.cart;
    // const {cart}=props;
    console.log(cart);
    let totalPrice=0;
    let totalShipping=0;
    let quantity=0;
    for(const product of cart){
        // system 1: 
        /*  
        if(product.quantity===0){
            product.quantity=1;
        }
        */
        
        // system 2: 
        /* 
         product.quantity=product.quantity || 1; 

        */
        totalPrice=totalPrice+product.price*product.quantity;
        totalShipping=totalShipping+product.shipping*product.quantity  ;
        quantity=quantity+product.quantity;
    }
    const tax=totalPrice*7/100;
    const grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h5>Order summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:$ {totalPrice.toFixed(2)}</p>
            <p>Total Shipping:$ {totalShipping.toFixed(2)}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'><span>Clear Cart</span>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;
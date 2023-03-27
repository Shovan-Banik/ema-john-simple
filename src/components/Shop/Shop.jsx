import React, { useEffect, useState } from 'react';
import './shop.css';

const Shop = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='products-container'>
            <h2>shop products: {products.length}</h2>
            </div>
            <div className='cart-container'>
                <p>cart items</p>
            </div>
        </div>
    );
};

export default Shop;
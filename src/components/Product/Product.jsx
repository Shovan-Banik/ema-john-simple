import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const{name,price,ratings,img,seller}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <p className='product-manufacture'>Manufacturer: {seller}</p>
            <p className='product-rating'>Rating: {ratings} star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;
import React from 'react'
import './texts.css';
import image from '../assets/cafer-1.png';
import './products.css';
const Products = () => {
  return (
    <div>
        <h1>Cafer Coffee</h1>
        <p>This is Products page component</p>
        <img className='products-img' src={image} />
    </div>
  )
}

export default Products
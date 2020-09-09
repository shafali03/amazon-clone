import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className="product__info">
        <p>product information</p>
        <p className="product__price">
          <small>£</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img src="https://res.cloudinary.com/shafali/image/upload/v1599642773/skinnytast_kig2p3.jpg" alt="book" />

      <button>Add to basket</button>
    </div>
  )
}

export default Product

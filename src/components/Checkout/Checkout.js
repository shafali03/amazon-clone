import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className="checkout__ad" src="https://res.cloudinary.com/shafali/image/upload/v1599654332/check-banner_twp95q.jpg"
          alt="checkout-banner"
        />




        <div>
          <h2 className="checkout__title">
            Your Shopping Basket</h2>

          {/* {BasketItem} */}
        </div>
      </div>




      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout

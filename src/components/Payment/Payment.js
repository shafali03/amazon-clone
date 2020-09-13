import React from 'react'
import './Payment.css'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className='payment'>
      <div className="payment__container">

        {/* delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>450 Brick Lane</p>
            <p>London</p>
          </div>
        </div>




        {/* Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>




        {/* Payment method */}
        <div className="payment__section">

        </div>
      </div>
    </div>
  )
}

export default Payment

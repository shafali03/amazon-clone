import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { Link } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer'


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = e => {
    //Stripe
  }


  const handleChange = event => {
    // listen for changes

    // Display errors
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }


  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>
          Checkout (
            <Link to="/checkout">{basket?.length} items</Link>
            )
        </h1>
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
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">

                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={"£"}
                />

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment

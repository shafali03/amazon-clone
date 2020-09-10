import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider'

function Subtotal() {

  const [{ basket }] = useStateValue()

  const basketTotal = (basket) => {
    const prices = basket.map((el) => el.price)
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
      sum += prices[i]
    }
    return sum
  }

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
          </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

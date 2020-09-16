import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({ order: { id, data: { created, basket, amount } } }) {
  return (
    <div className='order'>
      <h2>Order</h2>

      {/* <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p> */}

      <p>{moment.unix(created).format("MMMM Do YYYY, h:mm a")}</p>

      <p className="order__id">
        <small>{id}</small>
      </p>

      {/* {order.data.basket?.map(item => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))} */}

      {
        basket?.map(product => <CheckoutProduct key={product.id} disabled {...product} />)
      }

      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className='order__total'>
              Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}
      />
    </div>
  )
}

export default Order

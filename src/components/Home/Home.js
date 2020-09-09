import React from 'react'
import './Home.css'
import Product from '../Product/Product'


function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img
          className="home__image"
          src="https://res.cloudinary.com/shafali/image/upload/v1599639483/amazon-banner-prime_mzf91h.jpg" alt="banner" />

        <div className="home__row">
          <Product />
          <Product />
        </div>


        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>

      </div>
    </div>
  )
}

export default Home

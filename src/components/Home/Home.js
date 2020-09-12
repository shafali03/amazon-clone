import React from 'react'
import './Home.css'
import Product from '../Product/Product'


function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img
          className="home__image"
          src="https://res.cloudinary.com/shafali/image/upload/v1599908846/new_ft_hero_vanv2._CB430308772__1_t6rh7l.jpg" alt="banner" />

        <div className="home__row">
          <Product
            id="123456789"
            title='Skinnytaste Meal Prep: Healthy Make‑Ahead Meals and Freezer Recipes'
            price={34.99}
            image={"https://res.cloudinary.com/shafali/image/upload/v1599642773/skinnytast_kig2p3.jpg"}
            rating={4}
          />

          <Product
            id="123435673"
            title='Glass Electric Tea Kettle High quality transparent SCHOTT glass body with clear water level indicators'
            price={45.99}
            image={"https://res.cloudinary.com/shafali/image/upload/v1599647281/kettle_s3rmrh.jpg"}
            rating={5}
          />
        </div>


        <div className="home__row">
          <Product
            id="123132373"
            title='Apple Watch Series 5 (GPS), 40mm Space Grey Aluminium Case with Black Sport Band'
            price={430}
            image={"https://res.cloudinary.com/shafali/image/upload/v1599649501/images_qcmwon.jpg"}
            rating={5}
          />
          <Product
            id="123432342"
            title='Jean Paul Gaultier Le Male Eau De Toilette 75ml Spray'
            price={65.99}
            image={"https://res.cloudinary.com/shafali/image/upload/v1599648203/Jean-paul_jiebmo.jpg"}
            rating={5}
          />
          <Product
            id="123412349"
            title='Coco Mademoiselle Intense Spray A woody and ambery oriental fragrance'
            price={114.99}
            image={"https://res.cloudinary.com/shafali/image/upload/v1599648436/chanel-coco_pv73fc.jpg"}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123417789"
            title='GUNAI Electric Off-road Bikes Fat Bike 26” 4.0 Tire E-Bike 1000w 48V Electric Mountain Bike with Rear Seat'
            price={1699}
            image={"https://res.cloudinary.com/shafali/image/upload/v1599649109/619qyxlBYqL._AC_SX466__xn6rzx.jpg"}
            rating={5}
          />
        </div>

      </div>
    </div>
  )
}

export default Home

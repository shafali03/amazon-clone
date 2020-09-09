import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
  return (
    <div className='header'>
      <img className='header__logo'
        src="https://res.cloudinary.com/shafali/image/upload/v1599634571/Amazon-Logo_aj8jct.jpg" alt="amazon-logo"
      />

      <div className="header__search">
        <input className='header__searchInput' type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span
            className='header__optionLinkOne'>Hello Guest</span>
          <span
            className='header__optionLinkTwo'>Sign In</span>
        </div>


        <div className="header__option">
          <span
            className="header__optionLinkOne">Returns
          </span>
          <span
            className="header__optionLinkTwo"> & Orders</span>
        </div>


        <div className="header__option">
          <span
            className="header__optionLinkOne">Your
          </span>
          <span
            className="header__optionLinkTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>

      </div>


    </div>

  )
}

export default Header
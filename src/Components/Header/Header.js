import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
        <div className="header__menu ">
            <h4 className="header__menu-text bold-text">Menu</h4>
        </div>

        <div className="header__heading">
            <h1 className="header__heading-heading">Table for two</h1>
        </div>

        <div className="header__buttons">
            <button className="header__buttons-reserve">Reserve Table</button>
            <button className="header__buttons-browse">Browse Menu</button>
        </div>
    </div>
  )
}

export default Header
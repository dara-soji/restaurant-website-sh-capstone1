import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__logo">
            <h1 className="navbar__logo-name head-text">Capstone1</h1>
        </div>
        <ul className="navbar__lists">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
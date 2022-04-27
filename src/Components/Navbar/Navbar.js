import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link  to='/' className="navbar__logo app__links">
            <h1 className="navbar__logo-name head-text">Capstone1</h1>
        </Link>
        <ul className="navbar__lists">
            <li><Link className="app__links" to="/">Home</Link></li>
            <li><Link className="app__links" to="/about">About</Link></li>
            <li><Link className="app__links" to="/products">Product</Link></li>
            <li><Link className="app__links" to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
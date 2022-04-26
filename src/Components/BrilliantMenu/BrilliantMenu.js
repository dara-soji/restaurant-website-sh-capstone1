import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import './BrilliantMenu.scss'

const BrilliantMenu = () => {
    const [products, setProducts] = useState([
        {
            "name": "Grilled Calamari",
            "desc": "tomato suace and lemeon",
            "price": 13,
        },
        {
            "name": "Lobstar",
            "desc": "You kow the things that go with lobstar na",
            "price": 20,
        },
        {
            "name": "mac and cheese",
            "desc": "cheddar, and some othe adittional stuff",
            "price": 10,
        },
    ])
    const [menu, setMenu] = useState([
        {
            "title": "Cocktail",
            "pic1": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "pic2": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            "title": "Full Meal",
            "pic1": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "pic2": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        },
    ])
  return (
    <div className="brilliantMenu">
        <h3 className="brilliantMenu__heading head-text">A brilliant Menu</h3>
        <p className="brilliantMenu__desc p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia eius sit iusto doloribus ipsa officiis repellat distinctio animi illum!</p>
        <div className="brilliantMenu__menu">

        <Menu products={products} menu={menu[0]}/>
        <Menu products={products} menu={menu[1]}/>
        </div>
    </div>
  )
}

export default BrilliantMenu
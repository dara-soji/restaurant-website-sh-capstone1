import React from 'react'
import './Menu.scss'

const Menu = ({products, menu}) => {
  return (
    <div className="menu">
        <div className="menu__product">
            <h4 className="menu__product-heading bold-text">{menu.title}</h4>
            {products.map((product, index) =>(
                <div className="menu__product-item" key={index}>
                    <p className="menu__product-item-name p-text">{`${product.name} $${product.price}`}</p>
                    <p className="menu__product-item-desc p-text">{product.desc}</p>
                    <div className="menu__product-item-line"></div>
                </div>
            ))}
            <p className="menu__product-more">see more...</p>
        </div>

        <div className="menu__pic-1" style={{backgroundImage: `url(${menu.pic1})`}}></div>
        <div className="menu__pic-2" style={{backgroundImage: `url(${menu.pic2})`}}></div>
    </div>
  )
}

export default Menu
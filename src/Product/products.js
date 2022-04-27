import React from "react";
import data from '../data.json'
import './products.css';
import 'bootstrap'

const Products = () => {
    return (
        <div className="products">        
          <div className="jumbotron intro">
            <h1 className="text-center">Our Menu</h1>
          </div>
          <main>
            <div className="featured">
              <h2>Main Dishes</h2>
              <div className="menu">
                {
                  data.main.map(dish => {
                    return (
                        <div key={dish.id} className="menu-item">
                          <div className="menu-item-title d-flex justify-content-between">
                            <span>{dish.name}</span>
                            <span className="price">{`$${dish.price}`}</span>
                          </div>
                          <div className="menu-item-description text-left"><p>{dish.description}</p></div>
                        </div>
                    ); 
                  })
                }
              </div>
            </div>
            <div className="bar">
              <h2 className="display-4"><span>REMY'<sup>s</sup></span><span><sub>bar</sub></span></h2>
              <div className="menu">
                {
                  data.drinks.map(dish => {
                    return (
                        <div key={dish.id} className="menu-item">
                          <div className="menu-item-title d-flex justify-content-between">
                            <span>{dish.name}</span>
                            <span className="price">{`$${dish.price}`}</span>
                          </div>
                          <div className="menu-item-description text-left"><p>{dish.description}</p></div>
                        </div>
                    ); 
                  })
                }
              </div>
            </div>
            <div className="snacks">
              <h2 className="text-center">Snacks x Sandwiches</h2>
              <div className="menu">
                {
                  data.snacks.map(dish => {
                    return (
                        <div key={dish.id} className="menu-item">
                          <div className="menu-item-title d-flex justify-content-between">
                            <span>{dish.name}</span>
                            <span className="price">{`$${dish.price}`}</span>
                          </div>
                          <div className="menu-item-description text-left"><p>{dish.description}</p></div>
                        </div>
                    ); 
                  })
                }
              </div>
            </div>
          </main>
      </div>
    )
}
export default Products;
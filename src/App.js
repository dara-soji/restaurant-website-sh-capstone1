import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Products from './pages/products/products'
/*import About from './pages/about/about'
import Contact from './pages/contact/contact'*/

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
    {/* <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
    </div>
  );
}


export default App;

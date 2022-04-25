import React from 'react'
import HeadChef from '../Components/HeadChef/HeadChef'
import Header from '../Components/Header/Header'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <Header />
        <HeadChef />
    </div>
  )
}

export default Home
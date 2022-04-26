import React from 'react'
import BrilliantMenu from '../Components/BrilliantMenu/BrilliantMenu'
import Footer from '../Components/Footer/Footer'
import HeadChef from '../Components/HeadChef/HeadChef'
import Header from '../Components/Header/Header'
import Reserve from '../Components/Reserve/Reserve'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <Header />
        <HeadChef />
        <BrilliantMenu />
        <Reserve />
        <Footer />

    </div>
  )
}

export default Home
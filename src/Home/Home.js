import React from 'react'
import BrilliantMenu from '../Components/BrilliantMenu/BrilliantMenu'
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

    </div>
  )
}

export default Home
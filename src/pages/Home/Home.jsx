import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./home.scss"
import NewProducts from '../../components/NewProducts/NewProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div className="home">
      
      <Slider/>
      <NewProducts type="New"/>
      <Categories/>
      <NewProducts type="Trending"/>
      <Contact/>
    </div>
  )
}

export default Home

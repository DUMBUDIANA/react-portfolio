import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='container'>
        <div className='n-left'>
          <p>Diana <span>toggle</span></p>
        </div>
      
        <div className='n-right'>
          <ul className='nav-list'>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portifolio</li>
            <li> Testimonials </li>
          </ul>
          <button className='button'>Contact </button>
        </div>
        
    </div>
  )
}

export default Home
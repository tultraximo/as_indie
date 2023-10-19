import React from 'react'
import mainImage from '../assets/main.png'
import lineImage from '../assets/line.png'
import './home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className='home-page'>
      <img src={mainImage} alt="Home Image" className="centered-image" />
      <img src={lineImage} alt="line Image" className="bottom-image" />
    </div>
  )
}

export default Home

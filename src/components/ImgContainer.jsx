import React from 'react'
import logo from '../assets/game.jpg'
import '../styles/ImgContainer.css'

const ImgContainer = () => {
  return (
    <div className='imgcontainer'>
        <img src={logo} alt="tasks" />
    </div>
  )
}

export default ImgContainer
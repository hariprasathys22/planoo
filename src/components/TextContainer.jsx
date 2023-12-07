import React from 'react'
import '../styles/TextContainer.css'

const TextContainer = () => {
  return (
    <div className='textcontainer'>
        <div className="textcontainer-htext">
            Get ready to <span>supercharge</span> your goal- setting and planning with AI Planner.
        </div>
        <div className="textcontainer-input">
            <input type="email" placeholder='Enter your email' required />
            <button>Register</button>
        </div>
        <div className='textcontainer-ptext'>
            <p className='p-text'>Boost your efficiency with our Productivity app!</p>
            <p className='p-text'>Get more done effortlessly.</p>
        </div>
    </div>
  )
}

export default TextContainer
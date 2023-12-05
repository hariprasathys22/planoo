import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            Planoo
        </div>
        <div className="navbar-navitems">
            <ul className='navitems-list'>
                <li>Features</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="navbar-register-button">
            <button>Register</button>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul className='nav-links'>
            <Link to='/' className="home">
                <li>Home</li>
            </Link>
            <Link to='/about' className="about">
                <li>about</li>
            </Link>
            
        </ul>
    </nav>
  )
}

export default Nav
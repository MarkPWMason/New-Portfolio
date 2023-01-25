import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" className='siteTitle'>Mark's Portfolio</Link>
      <ul className='navMenu'>
        <li>
          <Link className='navItem' to="/">Home</Link>
        </li> 
        <li>
          <Link className='navItem' to="/projects">Projects</Link>
        </li>
        <li>
          <Link className='navItem' to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

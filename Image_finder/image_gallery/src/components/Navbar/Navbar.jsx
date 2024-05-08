import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        
        <li><a href="./dashboard">Home</a></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/update'>Update</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

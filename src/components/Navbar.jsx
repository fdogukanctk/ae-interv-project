import React from 'react'
import './Navbar.css'
const Navbar = (propss) => {
  return (
    <nav className='navbar'>
      <a className='logo' href='/home'>Logo</a>
      <ul className='nav-list'>
        <li className='item'><a href="/nav1" >nav 1</a></li>
        <li className='item'><a href="/nav2">nav 2</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
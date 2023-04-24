import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className='header'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="*">Photo</Link>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default Header
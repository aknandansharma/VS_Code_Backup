import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight : isActive ? "bold" : "normal",
      color: isActive ? "green" : "white",
      
    }
  }
  return (
    <>
    <nav className='header'>
      <ul>
        <li>
          <NavLink style={navLinkStyle} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="*">Photo</NavLink>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default Header
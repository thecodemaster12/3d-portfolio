import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <NavLink to='/'>
            <p>SRS</p>
        </NavLink>
    </header>
  )
}

export default Navbar
import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
function Navbar() {
  return (
    <nav className='Navbar'>
      {/*Navbar component*/}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campuses">Campuses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
      </nav>
  )
}

export default Navbar;

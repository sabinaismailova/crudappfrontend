import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Home() {
  return (
    <div>
      <nav>
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

      <h1> Welcome to our Campus and Student Mangement System</h1>
      <p>The systemis design to manage the data of campus and students</p>
      <p>The system allow you to view, add, and delete the data</p>

      {
      // <Link to="/campuses">Go to Campuses</Link>,
      // <br></br>
      // <Link to="/students">Go to Students</Link>
      }
    </div>
  )
}

export default Home;
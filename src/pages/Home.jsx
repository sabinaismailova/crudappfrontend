import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from "../components/footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <h1> Welcome to our Campus and Student Mangement System</h1>
      <p>The systemis design to manage the data of campus and students</p>
      <p>The system allow you to view, add, and delete the data</p>

      {
      // <Link to="/campuses">Go to Campuses</Link>,
      // <br></br>
      // <Link to="/students">Go to Students</Link>
      }
      <Footer />
    </div>
  )
}

export default Home;
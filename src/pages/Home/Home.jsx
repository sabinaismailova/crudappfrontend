import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer";
import "./Home.css";
import homeImage from "./home.png";
function Home() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <p class="sentence">
          Welcome to our Campus and Student Management System
        </p>
        <p class="sentence">
          The system is designed to manage the data of campus and students
        </p>
        <p class="sentence">
          The system allows you to view, add, and delete the data
        </p>
        <img src={homeImage} alt="Home" />
      </div>

      {
        // <Link to="/campuses">Go to Campuses</Link>,
        // <br></br>
        // <Link to="/students">Go to Students</Link>
      }
      <Footer />
    </div>
  );
}

export default Home;
import React from "react";
import { useDispatch } from "react-redux";
import AddStudent from "../components/forms/AddStudent";
import { addStudentThunk } from "../redux/students/student.action";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

//used as a route element in App.js leading to the add student form page
function AddStudentPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //handle submit func that dispatches the addStudentThunk with the student value passed into the func
    //also navigates to the all students page when called  
    //passed to AddStudent component as onSubmit 
    function handleSubmit(student){
        dispatch(addStudentThunk(student));
        navigate(`/students`);
    };

    //renders navbar and footer with their components
    //renders add student form on page with AddStudent component taking handleSubmit func
  return (
    <div>
        <Navbar />
        <AddStudent onSubmit={handleSubmit} />
        <Footer />
    </div>
  )
}

export default AddStudentPage
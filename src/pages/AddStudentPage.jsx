import React from "react";
import { useDispatch } from "react-redux";
import AddStudent from "../components/forms/AddStudent";
import { addStudentThunk } from "../redux/students/student.action";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

function AddStudentPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(student){
        dispatch(addStudentThunk(student));
        navigate(`/students`);
    };

  return (
    <div>
        <Navbar />
        <AddStudent onSubmit={handleSubmit} />
        <Footer />
    </div>
  )
}

export default AddStudentPage
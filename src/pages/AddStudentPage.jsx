import React from "react";
import { useDispatch } from "react-redux";
import AddStudent from "../components/AddStudent";
import { addStudentThunk } from "../redux/students/student.action";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function AddStudentPage() {
    const dispatch = useDispatch();

    function handleSubmit(student){
        dispatch(addStudentThunk(student));
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
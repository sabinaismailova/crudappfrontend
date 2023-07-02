import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudentThunk } from "../redux/students/student.action";
import ListSingleStudent from "../components/singleStudent/ListSingleStudent";
import { useParams } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

//used as a route element in App.js leading to the single student pages
function SingleStudentPage() {
  //gets the single student object from student reducer 
  const student = useSelector((state) => state.students.singleStudent);
  const dispatch = useDispatch();

  //gets the dynamic ':id' dynamic param from the route path 
  const { id } = useParams();

  //dispatches the fetchSingleStudentThunk() from student actions with the current student 'id' value from params
  const fetchSingleStudent = () => {
    console.log("RUNNING DISPATCH FROM FETCHSINGLESTUDENT");
    return dispatch(fetchSingleStudentThunk(id));
  };

  //run the fetchSingleStudent() function from above every time the id param changes 
  //every time the user clicks a student from students page, this function runs and gets that student's info
  useEffect(() => {
    console.log("FETCHING SINGLE STUDENT IN USE EFFECT");
    fetchSingleStudent();
  },[id]);

  //renders the navbar and footer with their components
  //renders the single student page contents through ListSingleStudent component
  //the student object with current student info is passed to the ListSingleStudent component
  return (
    <div>
      <Navbar />
      <ListSingleStudent student={student} />
      <Footer />
    </div>
  );
}

export default SingleStudentPage;

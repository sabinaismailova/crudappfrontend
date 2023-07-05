import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStudentsThunk } from '../../redux/students/student.action';
import ListAllStudents from '../../components/ListAllStudents/ListAllStudents';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";
import "./Students.css";

//used as a route element in App.js leading to the all students page
function Students() {
  const dispatch = useDispatch();
  //gets the all students array from student reducer 
  const allstudents = useSelector(state => state.students.allStudents);
  

  //gets all students with the fetchAllstudents func
  useEffect(()=>{
    console.log('FETCH ALL STUDENTS FIRING IN USE EFFECT');
    //dispatches the fetchAllStudentsThunk() from student actions which returns 
    //object with the action type and payload containing the array of students
    //and sets all students state to the payload from here through the root-reducer
    const fetchAllStudents = ()=>{
      console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS');
      return dispatch(fetchAllStudentsThunk());
    };
    fetchAllStudents();
  },[dispatch]);
  
  //renders a navbar and footer with their components 
  //shows a header and an add student button on top of the page
  //uses the ListallStudents component to render a student card for every student that's in the allstudents array 
  //passes a kay and student obj to the ListAllStudents component 
  //prints a message informing user if there are no students registered 
  return (
    <div>
      <Navbar />
      <div className="students-page-header">
        <h1 className="header">All Students</h1>
        <Link to="/students/add"><button class="add-btn">Add Student</button></Link>
      </div>
      <div className="container">
        {allstudents.length>0 ? allstudents.map(student =>(
          <ListAllStudents key={student.id} student={student} />
        )) : <p>There are no students registered in the database!</p>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Students
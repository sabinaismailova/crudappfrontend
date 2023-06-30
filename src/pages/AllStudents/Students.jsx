import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStudentsThunk } from '../../redux/students/student.action';
import ListAllStudents from '../../components/ListAllStudents/ListAllStudents';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";
import "./Students.css";

function Students() {
  const dispatch = useDispatch();
  const allstudents = useSelector(state => state.students.allStudents);
  
  const fetchAllStudents = ()=>{

    console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS');
    return dispatch(fetchAllStudentsThunk());
  };

  useEffect(()=>{
    console.log('FETCH ALL STUDENTS FIRING IN USE EFFECT');

    fetchAllStudents();
  },[]);
  
  return (
    <div>
      <Navbar />
      <h1 class="header">All Students</h1>
      <div class="position-right">
        <Link to="/students/add"><button class="add-btn">Add Student</button></Link>
      </div>
      <div class="container">
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
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStudentsThunk } from '../redux/students/student.action';
import ListAllStudents from '../components/ListAllStudents';
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";

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
      {
        //div holding header and add student button 
      }
      <Navbar />
      <div>
        <h1>All Students</h1>
        <button>Add Student</button>
      </div>
      {
        //div holding all cards with student name and campus
      }
      <div style={{display:"inline-flex", flexWrap:"wrap", justifyContent: "center", alignItems: "center"}}>
        {
          //divs representing students cards with student info with dummy data 
        }
        {allstudents.length>0 ? allstudents.map(student =>(
          <ListAllStudents key={student.id} student={student} />
        )) : <p>There are no students registered in the database!</p>
        }
        {
          // <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          //   <img src="" alt="student_img" style={{width:"100%"}}/>
          //   <div>
          //     <h4><b>student name</b></h4>
          //     <p>campus name</p>
          //   </div>
          // </div>
        }

      </div>
      <Footer />
    </div>
  )
}

export default Students
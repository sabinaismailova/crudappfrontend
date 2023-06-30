import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteStudentThunk } from '../redux/students/student.action'

function ListAllStudents({student}) {
  const dispatch = useDispatch();

  const handleDelete = () =>{
    console.log("TRUING TO DELETE STUDENT")
    dispatch(deleteStudentThunk(student.id));
    console.log(student.id);
    console.log("STUDENT DELETED")
  }

  return (
    <div>
      <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
        <Link to={`./${student.id}`}>
          <img src={student.imageUrl} alt="student_img" style={{width:"100%"}}/>
          <div>
              <h4><b>{student.firstName} {student.lastName}</b></h4>
              {
                //<p>{student.campusName}</p>
              }
          </div>
        </Link>
        <button onClick={handleDelete}>X</button>
        <Link to={`/students/edit/${student.id}`}>Edit</Link>
      </div>
    </div>
  )
}

export default ListAllStudents
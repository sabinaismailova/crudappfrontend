import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteStudentThunk } from '../../redux/students/student.action'
import "./AllStudents.css"

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
      <div class="card">
        <Link to={`./${student.id}`} class="text">
          <div class="img-div">
            <img class="fit" src={student.imageUrl} alt="student_img"/>
          </div>
          <div class="card-font">
              <h4><b>{student.firstName} {student.lastName}</b></h4>
          </div>
        </Link>
        <button class="del-btn" onClick={handleDelete}>X</button>
        <Link to={`/students/edit/${student.id}`} class="text">Edit</Link>
      </div>
    </div>
  )
}

export default ListAllStudents
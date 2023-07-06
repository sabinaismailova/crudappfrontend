import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteStudentThunk } from '../../redux/students/student.action'
import "./AllStudents.css"

function ListAllStudents({student}) {
  const dispatch = useDispatch();

  //handle func for 'x' button that deletes the student from backend 
  //dispatches the deleteStudentThunk with the student id which calls delete in backend
  //and deletes student in front end by setting the allStudents state 
  //to an array with the student associated with the student id filtered out in the student reducer 
  const handleDelete = () =>{
    console.log("TRUING TO DELETE STUDENT")
    dispatch(deleteStudentThunk(student.id));
    console.log(student.id);
    console.log("STUDENT DELETED")
  }

  //renders a card with the student's img on top and the student name accompanied by edit link and 'x' button at the bottom
  //edit is linked to the student edit form page and 'x' refers to the handleDelete func on click 
  return (
    <div>
      <div className="card">
        <Link to={`./${student.id}`} className="text">
          <div className="img-div">
            <img className="fit" src={student.imageUrl} alt="student_img"/>
          </div>
          <div className="card-font">
              <h4><b>{student.firstName} {student.lastName}</b></h4>
          </div>
        </Link>
        <div className="btns-container">
          <button className="del-btn" onClick={handleDelete}>Delete</button>
          <Link to={`/students/edit/${student.id}`} className="text">
            <button className="edit-btn">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListAllStudents
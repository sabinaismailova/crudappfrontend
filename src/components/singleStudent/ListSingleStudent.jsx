import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudentThunk } from "../../redux/students/student.action";
import "./singleStudent.css";

function ListSingleStudent({ student }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("TRYING TO DELETE STUDENT");
    dispatch(deleteStudentThunk(student.id));
    console.log(student.id);
    console.log("STUDENT DELETED");
  };
  return (
    <div>
      <div className="student-container">
        <img
          className="student-image"
          src={student.imageUrl}
          alt="student_img"
        />
        <div className="student-details">
          <p className="student-name">
            {student.firstName} {student.lastName}
          </p>
          <p className="student-email">Email: {student.email}</p>
          <p className="student-gpa">GPA: {student.gpa}</p>
          <div className="student-actions">
            <Link className="edit-link" to={`/students/edit/${student.id}`}>
              Edit
            </Link>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="student-campus">
        <Link to={`/campuses/${student.campusId}`}>Campus Name: {student.campusId}</Link>
      </div>
    </div>
  );
}


export default ListSingleStudent;

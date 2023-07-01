import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteStudentThunk } from "../../redux/students/student.action";
import { fetchCampusNameThunk } from "../../redux/campus/campus.action";
import "./singleStudent.css";
import { useNavigate } from "react-router-dom";

//component used to render SingleStudentPage contents 
function ListSingleStudent({ student }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //gets the campus name string from the campus reducer 
  const campusName = useSelector((state) => state.campuses.campusName);

  //dispatches the fetchCampusNameThunk with the student campusId passed down with student object from SingleStudentPage
  //the thunk is called every time the student's campus id changes 
  useEffect(() => {
    dispatch(fetchCampusNameThunk(student.campusId));
  }, [dispatch, student.campusId]);

  //this is the handle func for deleting connected to the 'delete' button on the single student page
  //this dispatches the deleteStudentThunk with the current student id which deletes the student from the backend 
  const handleDelete = () => {
    console.log("TRYING TO DELETE STUDENT");
    dispatch(deleteStudentThunk(student.id));
    console.log(student.id);
    console.log("STUDENT DELETED");
    navigate('/students');
  };

  //renders the div containing the student info in a container on the SingleStudentPage 
  //container shows the student's image with their name, email, and gpa next to it along with the edit and delete buttons 
  //shows the student's campus name under the student info container 
  //The Edit button and Campus Name text are linked and navigate to the edit form page and the single campus page for their campus 
  //all student info is pulled from the backend database with the single student obj passed in from SingleStudentPage
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
        <Link to={`/campuses/${student.campusId}`}>
          Campus Name: {campusName}
        </Link>
      </div>
    </div>
  );
}

export default ListSingleStudent;

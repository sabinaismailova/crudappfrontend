import { Link } from 'react-router-dom';
import './StyleListSingleCampu.css';
import { useNavigate } from "react-router-dom";
import { deleteCampusThunk } from "../../redux/campus/campus.action";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { fetchAllStudentsThunk } from "../../redux/students/student.action";
import { enrollStudentThunk } from "../../redux/students/student.action";
//use to show style the single campus page
/**
 * 
 * @param {campus students} param0 campus: is the single student, students is all students in current campus
 * @returns 
 */
function ListSingleCampus({ campus, students }) {
    console.log('LIST SINGLE STUDENTS COMPONENTS');
    const navigate = useNavigate();
    const dispatch = useDispatch();

      const [selectedStudent, setSelectedStudent] = useState("");
      const availableStudent = useSelector(
        (state) => state.students.allStudents
      );
      console.log("AVAILABLE STUDENT ", availableStudent);

    //navgiate to an edit page of the campus id if handleEdit call
    function handleEdit(){
        navigate(`/campuses/edit/${campus.id}`);
    }

    //delete the single campus
    function handleDelete(){
        console.log("Try to delete")
        dispatch(deleteCampusThunk(campus.id));
        console.log(campus.id);
        console.log("I have deleted")
        //navigate to the all campuse page
        navigate('/campuses');
    }

      const handleEnroll = () => {
        console.log("Selected College:", campus.id);
        dispatch(enrollStudentThunk(selectedStudent, campus.id))
          .then(() => {
            dispatch(fetchAllStudentsThunk());
          })
          .catch((error) => {
            console.error("Enrollment Error:", error);
          });
        console.log("student id: ", selectedStudent);
      };

      useEffect(() => {
        dispatch(fetchAllStudentsThunk());
      }, [dispatch, campus.id]);

    return (
      <div className="single_campus_container">
        <div className="single_campus_card">
          <img
            src={campus.imageUrl}
            alt={campus.name}
            className="single_campus_image"
          />
          <div className="single_campus_details">
            <h1>{campus.name}</h1>
            <p>{campus.description}</p>
            <div>
              <button className={"single_campus_delete"} onClick={handleDelete}>
                Delete
              </button>
              <button className={"single_campus_edit"} onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="all_students_header">
          <h2 style={{ marginRight: "20px" }}>Students</h2>
          <>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">Select Student</option>
              {availableStudent.map((student) =>
                campus.id === student.campusId ? null : (
                  <option key={student.id} value={student.id}>
                    {student.firstName + " " + student.lastName}
                  </option>
                )
              )}
            </select>
            <button onClick={handleEnroll}>Enroll</button>
          </>
        </div>
        <div className="all_students_container">
          <div className="students_grid">
            {/* display each studnets with their info */}
            {students.map((student) => (
              <div key={student.id} className="single_student_card">
                <img
                  src={student.imageUrl}
                  alt={student.firstName}
                  className="single_student_image"
                />
                <h3>{campus.name}</h3>
                <Link to={`../students/${student.id}`}>
                  <h3>
                    {student.firstName} {student.lastName}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ListSingleCampus;

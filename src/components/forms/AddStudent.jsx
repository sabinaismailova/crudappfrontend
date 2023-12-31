import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetechAllCampusesThunk } from "../../redux/campus/campus.action";
import "./forms.css";
//used to render the add student form on add student page
function AddStudent({ onSubmit }) {
  //const containing all existing campuses in database
  const availableColleges = useSelector((state) => state.campuses.allCampus);
  const dispatch = useDispatch();
  //a local object that stores all the values needed to add a student to the backend database
  //populated by user add student form  
  const [newStudent, setNewStudent] = useState({});

  //gets all the campuses 
  useEffect(() => {
    dispatch(fetechAllCampusesThunk());
  }, [dispatch]);

  //handle change func used to set the new student obj values based on user input in the form
  //spreads already existing newStudent obj data to the set new student to maintain the data from previous user input 
  //sets the value that the user changed to the the value that the student entered
  const handleInputChange = (event) => {
    setNewStudent({
      ...newStudent,
      [event.target.name]: event.target.value,
    });
  };

  //handle submit func to prevent the form input from disappearing on submit 
  //also calls the onSubmit func passed in from AddStudentPage and sends it the new student local obj
  //this calls the addStudentThunk on AddStudentPage 
  //with the new student obj containing student info taken from user input form 
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newStudent);
  };

  //renders the add studen form and stores user input by calling handleInputChange and handleSubmit functions 
  //img url is set to the default user img and will remain the same unless user changes the img url
  //students can be added with no campus selected and no GPA
  return (
    <div className="forms">
      <h1 className="form-header">Student Info</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>{" "}
        <input
          type="text"
          name="firstName"
          value={newStudent.firstName}
          onChange={handleInputChange}
          required
        />
        <label>Last Name:</label>{" "}
        <input
          type="text"
          name="lastName"
          value={newStudent.lastName}
          onChange={handleInputChange}
          required
        />
        <label for="email">Email:</label>{" "}
        <input
          type="email"
          name="email"
          value={newStudent.email}
          onChange={handleInputChange}
          required
        />
        <label>Image URL:</label>{" "}
        <input
          type="url"
          name="imageUrl"
          value={newStudent.imageUrl}
          onChange={handleInputChange}
        />
        <label>GPA: </label>
        <input
          type="number"
          step="0.01"
          name="gpa"
          value={newStudent.gpa}
          min="0"
          max="4"
          onChange={handleInputChange}
        />
        <label>Campus: </label>{" "}
        <select
          name="campusId"
          value={newStudent.campusId || ""}
          onChange={handleInputChange}
        >
          <option key={0} value="">Select College</option>
          {availableColleges.map((campus) => (
          <option key={campus.id} value={campus.id}>
            {campus.name}
          </option>
          ))}
        </select>
        {/* <input
          type="number"
          name="campusId"
          value={newStudent.campusId}
          onChange={handleInputChange}
        /> */}
        <button className="submitbtn" type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;

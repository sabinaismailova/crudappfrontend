import React, { useState } from "react";
import "./forms.css";
function AddStudent({ onSubmit }) {
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    gpa: "",
    campusId: "",
  });

  const handleInputChange = (event) => {
    setNewStudent({
      ...newStudent,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newStudent);
  };

  return (
    <div className="forms">
      <h1>Student Info</h1>
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
        <label>Email:</label>{" "}
        <input
          type="text"
          name="email"
          value={newStudent.email}
          onChange={handleInputChange}
          required
        />
        <label>Image URL:</label>{" "}
        <input
          type="text"
          name="imageUrl"
          value={newStudent.imageUrl}
          onChange={handleInputChange}
        />
        <label>GPA: </label>
        <input
          type="number"
          name="gpa"
          value={newStudent.gpa}
          min="0"
          max="4"
          onChange={handleInputChange}
        />
        <label>Campus ID:</label>{" "}
        <input
          type="number"
          name="campusId"
          value={newStudent.campusId}
          onChange={handleInputChange}
        />
        <button className="submitbtn" type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;

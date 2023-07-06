import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editStudentThunk } from "../../redux/students/student.action";
import { fetechAllCampusesThunk } from "../../redux/campus/campus.action";
import "./forms.css";

function EditStudent() {
  const student = useSelector((state) => state.students.singleStudent);
  const availableColleges = useSelector((state) => state.campuses.allCampus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    console.log("EDIT STUDENT FIRING IN USE EFFECT");
    setEditForm(student);
  }, [student]);

  useEffect(() => {
    dispatch(fetechAllCampusesThunk());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITSTUDENTTHUNK");

    dispatch(editStudentThunk(editForm)).then(() => {
      navigate(`/students/${student.id}`);
    });
  };

  return (
    <div className="forms">
      <h1 className={"form-header"}>Edit Student</h1>
      <form onSubmit={handleEditSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={editForm.firstName || ""}
          onChange={handleInputChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={editForm.lastName || ""}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={editForm.email || ""}
          onChange={handleInputChange}
        />
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={editForm.imageUrl || ""}
          onChange={handleInputChange}
        />
        <label>GPA:</label>
        <input
          type="number"
          step="0.01"
          name="gpa"
          min="0"
          max="4"
          value={editForm.gpa || ""}
          onChange={handleInputChange}
        />
        <label>Campus: </label>
        <select
          name="campusId"
          value={editForm.campusId || ""}
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
          value={editForm.campusId || ""}
          onChange={handleInputChange}
        /> */}
        <button className="submitbtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditStudent;

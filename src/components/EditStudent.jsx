import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editStudentThunk } from "../redux/students/student.action";

function EditStudent() {
    const student = useSelector((state) => state.students.singleStudent);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        console.log('EDIT STUDENT FIRING IN USE EFFECT');
        setEditForm(student);
    }, [student]);

    const handleInputChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value,
        });
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        console.log('RUNNING DISPATCH FROM EDITSTUDENTTHUNK');
        dispatch(editStudentThunk(editForm));
        navigate(`/students/${student.id}`);
    };

  return (
    <form onSubmit={handleEditSubmit}>
        <label>
            First Name: <input type="text" name="firstName" value={editForm.firstName || ""} onChange={handleInputChange} />
        </label>
        <label>
            Last Name: <input type="text" name="lastName" value={editForm.lastName || ""} onChange={handleInputChange} />
        </label>
        <label>
            Email: <input type="text" name="email" value={editForm.email || ""} onChange={handleInputChange} />
        </label>
        <label>
            Image URL: <input type="text" name="imageUrl" value={editForm.imageUrl || ""} onChange={handleInputChange} />
        </label>
        <label>
            GPA: <input type="number" name="gpa" value={editForm.gpa || ""} onChange={handleInputChange} />
        </label>
        <label>
            Campus ID: <input type="number" name="campusId" value={editForm.campusId || ""} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
    </form>
  )
}

export default EditStudent
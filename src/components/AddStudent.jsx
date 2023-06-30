import React, { useState } from "react";

function AddStudent({onSubmit}) {
    const [newStudent, setNewStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        gpa: '',
        campusId: '',
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
    <form onSubmit={handleSubmit}>
        <label>
            First Name: <input type="text" name="firstName" value={newStudent.firstName} onChange={handleInputChange} required/>
        </label>
        <label>
            Last Name: <input type="text" name="lastName" value={newStudent.lastName} onChange={handleInputChange} required/>
        </label>
        <label>
            Email: <input type="text" name="email" value={newStudent.email} onChange={handleInputChange} required/>
        </label>
        <label>
            Image URL: <input type="text" name="imageUrl" value={newStudent.imageUrl} onChange={handleInputChange} />
        </label>
        <label>
            GPA: <input type="number" name="gpa" value={newStudent.gpa} onChange={handleInputChange} />
        </label>
        <label>
            Campus ID: <input type="number" name="campusId" value={newStudent.campusId} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Student</button>
    </form>
  )
}

export default AddStudent
import React from "react";
import { Link } from 'react-router-dom';
import './StyleListSingleCampu.css';
//use to show style the single campus page
function ListSingleCampus({ campus, students }) {
    console.log('LIST SINGLE STUDENTS COMPONENTS');

    return (
        <div className="single_campus_container">
            <div className="single_campus_title">
                <h1>Show All Campuses</h1>
            </div>
            <div className="single_campus_card">
                <img src={campus.imageUrl} alt={campus.name} className="single_campus_image" />
                <div className="single_campus_details">
                    <h1>{campus.name}</h1>
                    <p>{campus.description}</p>
                    <Link to={`/campuses/edit/${campus.id}`}>Edit</Link>
                </div>
            </div>
            <div className="all_students_header">

                <h2>Show All Students in Campus:</h2>
                <Link to="/students/add">
                    <button className="add_student_button">Add Student</button>
                </Link>
            </div>
            <div className="all_students_container">
                <div className="students_grid">
                    {students.map(student => (
                        <div key={student.id} className="single_student_card">
                            <img src={student.imageUrl} alt={student.firstName} className="single_student_image" />
                            <h3>{campus.name}</h3>
                            <Link to={`../students/${student.id}`}>
                            <h3>{student.firstName} {student.lastName}</h3>
                            </Link>
                            

                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default ListSingleCampus;

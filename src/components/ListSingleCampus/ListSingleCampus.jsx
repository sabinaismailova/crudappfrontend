import React from "react";
import { Link } from 'react-router-dom';
import './StyleListSingleCampu.css';
import { useNavigate } from "react-router-dom";
import { deleteCampusThunk } from "../../redux/campus/campus.action";
import { useDispatch } from "react-redux";
//use to show style the single campus page
function ListSingleCampus({ campus, students }) {
    console.log('LIST SINGLE STUDENTS COMPONENTS');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleEdit(){
        navigate(`/campuses/edit/${campus.id}`);
    }

    function handleDelete(){
        console.log("Try to delete")
        dispatch(deleteCampusThunk(campus.id));
        console.log(campus.id);
        console.log("I have deleted")
        navigate('/campuses');
    }

    return (
        <div className="single_campus_container">
            
            <div className="single_campus_card">
                <img src={campus.imageUrl} alt={campus.name} className="single_campus_image" />
                <div className="single_campus_details">
                    <h1>{campus.name}</h1>
                    <p>{campus.description}</p>
                    <div>
                        <button className={"single_campus_delete"} onClick={handleDelete}>Delete</button>
                        <button className={"single_campus_edit"} onClick={handleEdit}>Edit</button>
                    </div>
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

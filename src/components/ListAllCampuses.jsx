import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campus/campus.action";
import './StyleListAllCampuses.css';

//use to show all campus
//06/28/2023: just add two button use to future modify

function ListAllCampuses({ campus }) {

    //use to handle the delete action
    const dispatch = useDispatch();

    const HandleDelete = () => {
        console.log("Try to delete")
        dispatch(deleteCampusThunk(campus.id));
        console.log(campus.id);
        console.log("I have deleted")
    }


    console.log('LIST ALLCAMPUSES COMPONENTS');
    return (
        <div className="campus_container">
            <h2 className="campus_title">
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </h2>

            <img src={campus.imageUrl} alt={campus.name} className="campus_image" />

            <p className="campus_description">{campus.description}</p>

            <p>{campus.address} </p>

            <div>
                <button className="campus_delete" onClick={HandleDelete}>
                    Delete
                </button>

                <Link to={`/campuses/edit/${campus.id}`}>Edit</Link>
            </div>


        </div>
    );
}

export default ListAllCampuses;
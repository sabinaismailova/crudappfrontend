import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../../redux/campus/campus.action";
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
            <Link to={`/campuses/${campus.id}`} className="campus_link">
                <div className="campus_image_div">

                    <img src={campus.imageUrl} alt={campus.name} className="campus_image" />
                </div>

                <div className="campus_font">
                    <h4><b>{campus.name}</b></h4>
                </div>

                <div className="campus_description_div">
                    <p>{campus.description}</p>
                </div>

                <div className="campus_address_div">
                    <p>{campus.address}</p>
                </div>
            </Link>

            <div>
                <button className="campus_delete" onClick={HandleDelete}>
                    Delete
                </button>

                <Link to={`/campuses/edit/${campus.id}`} className="campus_link">Edit</Link>
            </div>


        </div>
    );
}

export default ListAllCampuses;
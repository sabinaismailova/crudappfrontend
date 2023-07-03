import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../../redux/campus/campus.action";
import './StyleListAllCampuses.css';

//use to show all campus
//06/28/2023: just add two button use to future modify
//pase the single campus as params
function ListAllCampuses({ campus }) {

    //use to handle the delete action
    const dispatch = useDispatch();

    //use to delete the campus
    const HandleDelete = () => {
        console.log("Try to delete");
        //send the campus.id action to the redux
        dispatch(deleteCampusThunk(campus.id));
        console.log(campus.id);
        console.log("I have deleted")
    }


    console.log('LIST ALLCAMPUSES COMPONENTS');
    return (
        <div className="campus_container">

            <div className="campus_image_div">

                <img src={campus.imageUrl} alt={campus.name} className="campus_image" />
            </div>
            <Link to={`/campuses/${campus.id}`} className="campus_link">
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

            <div className="action_Buttons">
                <button className="campus_delete" onClick={HandleDelete}>
                    Delete
                </button>

                <Link to={`/campuses/edit/${campus.id}`} className="campus_link">
                    <button className="campus_edit">Edit</button>
                </Link>
            </div>


        </div>
    );
}

export default ListAllCampuses;
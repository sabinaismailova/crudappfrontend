import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campus/campus.action";


//use to show all campus
//06/28/2023: just add two button use to future modify

function ListAllCampuses({campus}) {
    
    //use to handle the delete action
    const dispatch = useDispatch();

    const HandleDelete = () =>{
        console.log("Try to delete")
        dispatch(deleteCampusThunk(campus.id));
        console.log(campus.id);
        console.log("I have deleted")
    }


    console.log('LIST ALLCAMPUSES COMPONENTS');
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '45%',
            margin: '2.5%',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '5PX'
        }
        }>
            <h2 style={{
                textAlign: 'center',
            }}>
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </h2>

            <img src={campus.imageUrl} alt={campus.name} style={{
                height: '150px',
                objectFit: 'cover'

            }} />

            <p style={{
                flexGrow: 1
            }}>
                {campus.description}

            </p>

            <p>
                {campus.address}

            </p>

            <div>
                <button style={{
                    marginRight:'10px'
                    }}
                       onClick={HandleDelete}
                >
                   Delete 

                </button>

                <Link to={`/campuses/edit/${campus.id}`}>Edit</Link>
            </div>


        </div>
    );
}

export default ListAllCampuses;
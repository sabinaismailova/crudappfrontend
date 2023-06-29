import React from "react";
import { Link } from "react-router-dom";

//use to show all campus
//06/28/2023: just add two button use to future modify

function ListAllCampuses({campus}) {
    return (
        <div style={{
            diplay: 'flex',
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
                <Link to={`/${campus.id}`}>{campus.name}</Link>
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
                }}>
                   Delete 

                </button>

                <Link to={`/${campus.id}`}>Edit</Link>
            </div>


        </div>
    );
}

export default ListAllCampuses;
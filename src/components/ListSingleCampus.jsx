import React from "react";
import { Link } from 'react-router-dom';
//use to show style the single campus page
function ListSingleCampus({ campus, students }) {
    console.log('LIST SINGLE STUDENTS COMPONENTS');

    return (
        <div style={{
            diplay: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
        }>
            <div style={{
                textAlign: 'center'
            }}>
                <h1>Show All Campuses</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '80%',
                margin: '10px auto',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '5PX',
                justifyContent: 'start',
                alignItems: 'center',

            }
            }>
                <img src={campus.imageUrl} alt={campus.name} style={{
                    width: '300px',
                    height: '300px',

                }} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '500px',

                }}>
                    <h1>{campus.name}</h1>
                    <p>{campus.description}</p>
                    <Link to={`/campuses/edit/${campus.id}`}>Edit</Link>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '80%',
                margin:'0 auto',
            }}>

                <h2>Show All Students in Campus:</h2>
                <Link to="/students/add">
                    <button style={{
                        borderRadius: '10px',
                        backgroundColor: 'gray',
                        width: '160px',
                        height: '30px',
                        
                    }}>Add Student</button>
                </Link>
            </div>
            <div style={{
                diplay: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width:'80%',
                margin:'0 auto 100px auto',
                alignItems:'flex-start',
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {students.map(student => (
                        <div key={student.id} style={{
                            width: '23%',
                            height:'200px',
                            margin: '1px'
                        }}>
                            <img src={student.imageUrl} alt={student.firstName} style={{
                                width: '100%',
                                height: '150px'

                            }} />
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

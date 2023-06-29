import React from "react";
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
            <img src={campus.imageUrl} alt={campus.name} style={{
                width:'200px',
                height:'200px'
            }}/>
            <h1>{campus.name}</h1>
            <p>{campus.description}</p>
            <h2>Student:</h2>
            <div style={{
                diplay: 'flex',
                flexWrap:'wrap',
                justifyContent:'space-between'
            }}>
                {students.map(student =>(
                    <div key={student.id} style={{
                        width:'200px',
                        margin:'10px'
                    }}>
                        <img src={student.imageUrl} alt={student.firstName} style={{
                            width:'100%',
                            height:'150px'

                        }}/>
                        <h3>{student.firstName} {student.lastName}</h3>

                    </div>
                ))}
            </div>
        </div>

    );
}

export default ListSingleCampus;

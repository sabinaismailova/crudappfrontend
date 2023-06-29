import React from 'react'
import { Link } from 'react-router-dom'

function ListSingleStudent({student}) {
  return (
    <div style={{display:"block", width:"50%", marginLeft:"auto", marginRight:"auto", textAlign:"center"}}>
        <img src={student.imageUrl} alt="student_img" width="240px"></img>
        <div>
            <h1>{student.firstName} {student.lastName}</h1>
            <h2><Link to={`/campuses/${student.campusId}`}>{student.campusId}</Link></h2>
            <h4>Email: {student.email}</h4>
            <h4>GPA: {student.gpa}</h4>
        </div>
    </div>
  )
}

export default ListSingleStudent
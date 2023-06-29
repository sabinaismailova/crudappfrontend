import React from 'react'
import { Link } from 'react-router-dom'

function ListAllStudents({student}) {
  return (
    <div>
      <Link to={`./${student.id}`}>
      <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src={student.imageUrl} alt="student_img" style={{width:"100%"}}/>
          <div>
              <h4><b>{student.firstName} {student.lastName}</b></h4>
              {
                //<p>{student.campusName}</p>
              }
          </div>
      </div>
      </Link>
    </div>
  )
}

export default ListAllStudents
import React from 'react';
import ListAllStudents from '../components/ListAllStudents';

function Students() {
  
  return (
    <div>
      {
        //div holding header and add student button 
      }
      <div>
        <h1>All Students</h1>
        <button>Add Student</button>
      </div>
      {
        //div holding all cards with student name and campus
      }
      <div style={{display:"inline-flex", flexWrap:"wrap", justifyContent: "center", alignItems: "center"}}>
        {
          //divs representing students cards with student info with dummy data 
        }
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>
        <div style={{width:"160px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)", margin:"24px", textAlign: "center"}}>
          <img src="" alt="student_img" style={{width:"100%"}}/>
          <div>
            <h4><b>student name</b></h4>
            <p>campus name</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Students
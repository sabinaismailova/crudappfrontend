import axios from "axios";

import StudentActionType from "./student.types";

export const fetechAllStudents = (payload) =>{
    console.log("FETECH ALL STUDENTS ACTION");
    return {
        type: StudentActionType.FETECH_ALL_STUDENTS,
        payload: payload,
    };
};

export const fetechSingleStudent = (payload)=>{
    console.log("FETECH SINGLE STUDENT ACTION");
    return {
        type: StudentActionType.FETECH_SINGLE_STUDENTS,
        payload: payload,
    };
};

export const fetechAllStudentsThunk = () =>{
    return async (dispatch) =>{
        try{
            console.log("FETECHALLSTUDENTSTHUNK IS FIRING");
            const response = await axios.get('http://localhost:8080/api/getAllStudents');
            console.log("FETECHALLSTUDENTSTHUNK COMPLETED");
            dispatch(fetechAllStudents(response.data));
        }catch(error){
            console.error(error);
        }
    };
};

//the api address here is wrong need to fix when backend is ready
export const fetechSingleStudentThunk = (studentid) =>{
    return async (dispatch)=>{
        try {
            console.log("FETECHSINGLESTUDENTSTHUNK IS FIRING");
            const response = await axios.get(`http://localhost:8080/api/${studentid}`);
            console.log("FETECHSINGLESTUDENTSTHUNK COMPLETED");
            dispatch(fetechSingleStudent(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};
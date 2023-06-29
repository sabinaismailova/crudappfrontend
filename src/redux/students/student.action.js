import axios from "axios";

import StudentActionType from "./student.types";

export const fetchAllStudents = (payload) =>{
    console.log("FETCH ALL STUDENTS ACTION");
    return {
        type: StudentActionType.FETCH_ALL_STUDENTS,
        payload: payload,
    };
};

export const fetchSingleStudent = (payload)=>{
    console.log("FETCH SINGLE STUDENT ACTION");
    return {
        type: StudentActionType.FETCH_SINGLE_STUDENTS,
        payload: payload,
    };
};

export const fetchAllStudentsThunk = () =>{
    return async (dispatch) =>{
        try{
            console.log("FETCHALLSTUDENTSTHUNK IS FIRING");
            const response = await axios.get('http://localhost:8080/api/students/getAllStudents');
            console.log("FETCHALLSTUDENTSTHUNK COMPLETED");
            dispatch(fetchAllStudents(response.data));
        }catch(error){
            console.error(error);
        }
    };
};

//the api address here is wrong need to fix when backend is ready
export const fetchSingleStudentThunk = (studentid) =>{
    return async (dispatch)=>{
        try {
            console.log("FETCHSINGLESTUDENTSTHUNK IS FIRING");
            const response = await axios.get(`http://localhost:8080/api/students/getStudentById/${studentid}`);
            console.log("FETCHSINGLESTUDENTSTHUNK COMPLETED");
            dispatch(fetchSingleStudent(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};
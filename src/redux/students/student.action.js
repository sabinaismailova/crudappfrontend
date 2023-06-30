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

export const deleteStudent = (payload) => {
    console.log("DELETE STUDENT ACTION ACTIVE");
    return {
        type: StudentActionType.DELETE_STUDENT,
        payload: payload,
    };

};

export const editStudent = (payload) => {
    console.log("EDIT STUDENT ACTION ACTIVE");
    return {
        type: StudentActionType.EDIT_STUDENT,
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

export const deleteStudentThunk = (studentid) => {
    return async (dispatch) => {
        try {
            console.log("FETCHDELETESTUDENTTHUNK IS FIRING");
            await axios.delete(`http://localhost:8080/api/students/removeStudentByID/${studentid}`);
            console.log("FETECHDELETESTUDENTSTHUNK COMPLETED");
            dispatch(deleteStudent(studentid));
        } catch (error) {
            console.error(error);
        }
    };
};

export const editStudentThunk = (student) => {
    return async (dispatch) => {
        try {
            console.log("EDITSTUDENTTHUNK IS FIRING");
            const response = await axios.put(`http://localhost:8080/api/students/editStudentByID/${student.id}`, student);
            console.log("EDITSTUDENTTHUNK COMPLETED");
            dispatch(editStudent(response.data));
            console.log("Edit Student Data: ", response.data);
        } catch (error) {
            console.error(error);
        }
    };
};

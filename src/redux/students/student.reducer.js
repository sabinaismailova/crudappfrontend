import StudentActionType from "./student.types";

//defin the initial state
export const INITIAL_STUDENT_STATE = {
    allStudents:[],
    singleStudent: {},
};

//handle the action type
const students = (state = INITIAL_STUDENT_STATE, action)=>{
    console.log("STUDENTREDUCER IS HANDLING FETCH ALL STUDENT ACTION");
    switch (action.type) {
        case StudentActionType.FETCH_ALL_STUDENTS:
            return {...state, allStudents:action.payload};
        case StudentActionType.FETCH_SINGLE_STUDENTS:
            return {
                ...state, singleStudent:action.payload
            };
        case StudentActionType.DELETE_STUDENT:
            return {
                ...state, allStudents:state.allStudents.filter(student=>student.id !==action.payload),
            };
        case StudentActionType.EDIT_STUDENT:
            return {
                ...state, 
                allStudents:state.allStudents.map((student)=>(student.id===action.payload.id? action.payload:student)),
                singleStudent:action.payload,
            };
        default:
            return state;
    }
}

export default students;
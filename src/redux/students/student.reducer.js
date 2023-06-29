import StudentActionType from "./student.types";

//defin the initial state
export const INITIAL_STUDENT_STATE = {
    allStudents:[],
    singleStudent: {},
};

//handle the action type
const students = (state = INITIAL_STUDENT_STATE, action)=>{
    console.log("STUDENTREDUCER IS HADLING FETECH ALL STUDENT ACTION");
    switch (action.type) {
        case StudentActionType.FETECH_ALL_STUDENT:
            return {...state, allStudents:action.payload};
        case StudentActionType.FETECH_SINGLE_STUDENT:
            return {
                ...state, singleStudent:action.payload
            };
        default:
            return state;
    }
}

export default students;
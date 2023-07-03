import StudentActionType from "./student.types";

//define the initial state for all students array and single student object 
export const INITIAL_STUDENT_STATE = {
    allStudents:[],
    singleStudent: {},
};

//handle the action type
const students = (state = INITIAL_STUDENT_STATE, action)=>{
    console.log("STUDENTREDUCER IS HANDLING FETCH ALL STUDENT ACTION");
    switch (action.type) {
      case StudentActionType.FETCH_ALL_STUDENTS:
        return { ...state, allStudents: action.payload };
      case StudentActionType.FETCH_SINGLE_STUDENTS:
        return {
          ...state,
          singleStudent: action.payload,
        };
      case StudentActionType.DELETE_STUDENT:
        return {
          ...state,
          allStudents: state.allStudents.filter(
            (student) => student.id !== action.payload
          ),
        };
      case StudentActionType.EDIT_STUDENT:
        return {
          ...state,
          allStudents: state.allStudents.map((student) =>
            student.id === action.payload.id ? action.payload : student
          ),
          singleStudent: action.payload,
        };
      case StudentActionType.ADD_STUDENT:
        return {
          ...state,
          allStudents: [...state.allStudents, action.payload],
        };
      case StudentActionType.ENROLL_STUDENT:
        const { studentId, campusId } = action.payload;
        return {
          ...state,
          singleStudent: {...state.singleStudent, campusId},
        };
      default:
        return state;
    }
}

export default students;
import { combineReducers } from "redux";
import campuses from "./campus/campus.reducer";
import students from "./students/student.reducer";

//use to manage the overall state of the application
//campuses and students each manage specific parts of the state
const rootReducer = combineReducers({
    campuses:campuses,
    students:students
})

export default rootReducer;
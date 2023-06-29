import { combineReducers } from "redux";
import campuses from "./campus/campus.reducer";
import students from "./students/student.reducer";

const rootReducer = combineReducers({
    campuses:campuses,
    students:students
})

export default rootReducer;
import { combineReducers } from "redux";
import campuses from "./campus/campus.reducer";

const rootReducer = combineReducers({
    campuses:campuses,
})
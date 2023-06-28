import CampusActionType from "./campus.types";

//defin the initial state
export const INITIAL_CAMPUS_STATE = {
    allCampus:[],
};

//handle the action type
const campuses = (state = INITIAL_CAMPUS_STATE, action)=>{
    console.log("CAMPUSREDUCER IS HADLING FETECH ALL CAMPUS ACTION");
    switch (action.type) {
        case CampusActionType.FETECH_ALL_CAMPUSES:
            return {...state, allCampus:action.payload};
        case CampusActionType.FETECH_SINGLE_CAMPUS:
            return state.map(campus =>campus.id===action.payload.id ? action.payload : campus);

        default:
            return state;
    }
}

export default campuses;
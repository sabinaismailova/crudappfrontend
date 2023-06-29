import CampusActionType from "./campus.types";

//defin the initial state
export const INITIAL_CAMPUS_STATE = {
    allCampus:[],
    singleCampus: {},
};

//handle the action type
const campuses = (state = INITIAL_CAMPUS_STATE, action)=>{
    console.log("CAMPUSREDUCER IS HADLING FETECH ALL CAMPUS ACTION");
    switch (action.type) {
        case CampusActionType.FETECH_ALL_CAMPUSES:
            return {...state, allCampus:action.payload};
        case CampusActionType.FETECH_SINGLE_CAMPUS:
            return {
                ...state, singleCampus:action.payload
            };
        case CampusActionType.DELETE_CAMPUS:
            return {
                ...state,
                allCampus:state.allCampus.filter(campus=>campus.id !==action.payload),
            };

        default:
            return state;
    }
}

export default campuses;
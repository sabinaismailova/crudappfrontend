import CampusActionType from "./campus.types";

//defin the initial state
export const INITIAL_CAMPUS_STATE = {
  allCampus: [],
  singleCampus: {},
  campusName: "",
  isLoading: false,
};

//handle the action type
const campuses = (state = INITIAL_CAMPUS_STATE, action) => {
  console.log("CAMPUSREDUCER IS HADLING FETECH ALL CAMPUS ACTION");
  switch (action.type) {
    /**
     * copy the current data
     * append the payload(allcampuse)
     */
    case CampusActionType.FETECH_ALL_CAMPUSES:
      return { ...state, allCampus: action.payload };

      /**
       * copy the current state
       * send the single campus we get store in the singleCampus variable
       */
    case CampusActionType.FETECH_SINGLE_CAMPUS:
      return {
        ...state,
        singleCampus: action.payload,
      };
      /**
       * ...state:make the copy of the current 
       * go through the allcampus, only keep the campus without the delete id campus
       * here action.payload is the campus id
       */
    case CampusActionType.DELETE_CAMPUS:
      return {
        ...state,
        allCampus: state.allCampus.filter(
          (campus) => campus.id !== action.payload
        ),
      };
      /**
       * return the similar to the old state
       * it will go throught the allcampus, if the id match, 
       * replaces the campus with the campus from the payload
       * otherwise it reamin the same.
       * 
       */
    case CampusActionType.EDIT_CAMPUS:
      return {
        ...state,
        allCampus: state.allCampus.map((campus) =>
          campus.id === action.payload.id ? action.payload : campus
        ),
        singleCampus: action.payload,
        isLoading: false,
      };

      //update the allCmpus with the current all campuses, and appending with the new campus(which is the payload)
    case CampusActionType.ADD_CAMPUS:
      return {
        ...state,
        allCampus: [...state.allCampus, action.payload],
      };

    case CampusActionType.FETCH_CAMPUS_NAME:
      return {
        ...state,
        isLoading: false,
        campusName: action.payload,
      };

    default:
      return state;
  }
};

export default campuses;

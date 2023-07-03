import axios from "axios";

import CampusActionType from "./campus.types";

//fetech all campus
export const fetechAllCampuses = (payload) => {
  console.log("FETECH ALL CAMPUSES ACTION");
  return {
    type: CampusActionType.FETECH_ALL_CAMPUSES,
    payload: payload,
  };
};

//here the single campus is the payload
export const fetechSingleCampus = (payload) => {
  console.log("FETECH SINGLE CAMPUS ACTION");
  return {
    type: CampusActionType.FETECH_SINGLE_CAMPUS,
    payload: payload,
  };
};


//the action we need to delete
//here the payload is the campus id we want to delete
export const deleteCampus = (payload) => {
  console.log("DELETE CAMPUS ACTION ACTIVE");
  return {
    type: CampusActionType.DELETE_CAMPUS,
    payload: payload,
  };
};

export const editCampus = (payload) => {
  console.log("EDIT CAMPUS ACTION ACTIVE");
  return {
    type: CampusActionType.EDIT_CAMPUS,
    //here payload is the updated the campus
    payload: payload,
  };
};
/**
 * 
 * @param {*} payload :payload will be use for the reducer the data we want to add the campus
 * @returns 
 */
export const addCampus = (payload) => {
  console.log("ADD CAMPUS ACTION ACTIVE");
  return {
    type: CampusActionType.ADD_CAMPUS,
    payload: payload,
  };
};

export const fetechAllCampusesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETECHALLCAMPUSESTHUNK IS FIRING");
      //get the data from the api call
      const response = await axios.get(process.env.REACT_APP_CAMPUS_KEY);
      console.log("FETECHALLCAMPUSESTHUNK COMPLETED");
      //send the data as payload
      dispatch(fetechAllCampuses(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

/**
 * 
 * @param {*} campusid :this is the campus id we want to fetech
 * @returns 
 */
export const fetechSingleCampusThunk = (campusid) => {
  return async (dispatch) => {
    try {
      console.log("FETECHsingleCAMPUSESTHUNK IS FIRING");
      //get the single campuses info from the backend according to the id
      const response = await axios.get(
        `${process.env.REACT_APP_CAMPUS_KEY}${campusid}`
      );
      console.log("FETECHSINGLECAMPUSESTHUNK COMPLETED");
      //send the action
      dispatch(fetechSingleCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteCampusThunk = (campusid) => {
  return async (dispatch) => {
    try {
      console.log("FETECHDELETECAMPUSESTHUNK IS FIRING");
      //send the delete api call
      await axios.delete(`${process.env.REACT_APP_CAMPUS_KEY}${campusid}`);
      console.log("FETECHDELETECAMPUSESTHUNK COMPLETED");
      dispatch(deleteCampus(campusid));
    } catch (error) {
      console.error(error);
    }
  };
};
/**
 * 
 * @param {*} campus :the campus need to be edited
 * @returns 
 */
export const editCampusThunk = (campus) => {
  //fetech the data from the server
  return async (dispatch) => {
    try {
      console.log("EDITCAMPUSESTHUNK IS FIRING");
      //when the api call happens, send the put request to the endpoint

      const response = await axios.put(
        `${process.env.REACT_APP_CAMPUS_KEY}${campus.id}`,
        campus
      );
      console.log("EDITCAMPUSESTHUNK COMPLETED");
      //dispatch the action to the redux store with the data from the api call's response
      dispatch(editCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
/**
 * 
 * @param {*} newCampus :the new campus we want to add to the database
 * @returns 
 */
export const addCampusThunk = (newCampus) => {
  return async (dispatch) => {
    try {
      console.log("ADDCAMPUSESTHUNK IS FIRING");
      //the api call, send the new campus data
      const response = await axios.post(
        process.env.REACT_APP_CAMPUS_KEY,
        newCampus
      );
      console.log("ADDCAMPUSESTHUNK COMPLETED");
      //when  the api request completely, dispact the action to the redux
      //take the response data as the payload for the action
      dispatch(addCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchCampusName = (name) => ({
  type: CampusActionType.FETCH_CAMPUS_NAME,
  payload: name,
});

export const fetchCampusNameThunk = (campusId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_CAMPUS_KEY}${campusId}`
      );
      const campusName = response.data.name;
      console.log("This is in campusTHUNK", campusName);
      dispatch(fetchCampusName(campusName));
    } catch (error) {
      console.error(error);
    }
  };
};


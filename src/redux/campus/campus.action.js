import axios from "axios";

import CampusActionType from "./campus.types";

export const fetechAllCampuses = (payload) => {
  console.log("FETECH ALL CAMPUSES ACTION");
  return {
    type: CampusActionType.FETECH_ALL_CAMPUSES,
    payload: payload,
  };
};

export const fetechSingleCampus = (payload) => {
  console.log("FETECH SINGLE CAMPUS ACTION");
  return {
    type: CampusActionType.FETECH_SINGLE_CAMPUS,
    payload: payload,
  };
};

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
    payload: payload,
  };
};

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
      const response = await axios.get(process.env.REACT_APP_CAMPUS_KEY);
      console.log("FETECHALLCAMPUSESTHUNK COMPLETED");
      dispatch(fetechAllCampuses(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//the api address here is wrong need to fix when backend is ready
export const fetechSingleCampusThunk = (campusid) => {
  return async (dispatch) => {
    try {
      console.log("FETECHsingleCAMPUSESTHUNK IS FIRING");
      const response = await axios.get(
        `${process.env.REACT_APP_CAMPUS_KEY}${campusid}`
      );
      console.log("FETECHSINGLECAMPUSESTHUNK COMPLETED");
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
      await axios.delete(`${process.env.REACT_APP_CAMPUS_KEY}${campusid}`);
      console.log("FETECHDELETECAMPUSESTHUNK COMPLETED");
      dispatch(deleteCampus(campusid));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editCampusThunk = (campus) => {
  return async (dispatch) => {
    try {
      console.log("EDITCAMPUSESTHUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_CAMPUS_KEY}${campus.id}`,
        campus
      );
      console.log("EDITCAMPUSESTHUNK COMPLETED");
      dispatch(editCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addCampusThunk = (newCampus) => {
  return async (dispatch) => {
    try {
      console.log("ADDCAMPUSESTHUNK IS FIRING");
      const response = await axios.post(
        process.env.REACT_APP_CAMPUS_KEY,
        newCampus
      );
      console.log("ADDCAMPUSESTHUNK COMPLETED");
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
        `${process.env.REACT_APP_STUDENT_KEY}${campusId}`
      );
      const campusName = response.data.name;
      dispatch(fetchCampusName(campusName));
    } catch (error) {
      console.error(error);
    }
  };
};


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

export const addCampus = (payload) =>{
    console.log("ADD CAMPUS ACTION ACTIVE");
    return {
        type: CampusActionType.ADD_CAMPUS,
        payload:payload,
    };
};


export const fetechAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            console.log("FETECHALLCAMPUSESTHUNK IS FIRING");
            const response = await axios.get('http://localhost:8080/api/campuses/getAllCampuses');
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
            const response = await axios.get(`http://localhost:8080/api/campuses/getCampusByID/:${campusid}`);
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
            await axios.delete(`http://localhost:8080/api/campuses/removeCampus/:${campusid}`);
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
            const response = await axios.put(`http://localhost:8080/api/campuses/editCampusByID/${campus.id}`, campus);
            console.log("EDITCAMPUSESTHUNK COMPLETED");
            dispatch(editCampus(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const addCampusThunk =(newCampus) =>{
    return async (dispatch) => {
        try {
            console.log("ADDCAMPUSESTHUNK IS FIRING");
            const response = await axios.post('http://localhost:8080/api/campuses/addCampus', newCampus);
            console.log("ADDCAMPUSESTHUNK COMPLETED");
            dispatch(addCampus(response.data));
        } catch (error) {
            console.error(error);
            
        }
    };
};
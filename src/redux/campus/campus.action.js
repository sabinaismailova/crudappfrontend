import axios from "axios";

import CampusActionType from "./campus.types";

export const fetechAllCampuses = (payload) =>{
    console.log("FETECH ALL CAMPUSES ACTION");
    return {
   
        type: CampusActionType.FETECH_ALL_CAMPUSES,
        payload: payload,
    };
};

export const fetechSingleCampus = (payload)=>{
    console.log("FETECH SINGLE CAMPUS ACTION");
    return {
   
        type: CampusActionType.FETECH_SINGLE_CAMPUS,
        payload: payload,
    };

};

export const fetechAllCampusesThunk = () =>{
    return async (dispatch) =>{
        try{
            console.log("FETECHALLCAMPUSESTHUNK IS FIRING");
            const response = await axios.get('http://localhost:8080/api/getAllCampuses');
            console.log("FETECHALLCAMPUSESTHUNK COMPLETED");
            dispatch(fetechAllCampuses(response.data));
        }catch(error){
            console.error(error);
        }
    };

};

//the api address here is wrong need to fix when backend is ready
export const fetechSingleCampusThunk = (campusid) =>{
    return async (dispatch)=>{
        try {
            console.log("FETECHsingleCAMPUSESTHUNK IS FIRING");
            const response = await axios.get(`http://localhost:8080/api/${campusid}`);
            console.log("FETECHSINGLECAMPUSESTHUNK COMPLETED");
            dispatch(fetechSingleCampus(response.data));
        } catch (error) {
            console.error(error);
            
        }
    };
};
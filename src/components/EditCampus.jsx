import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCampusThunk } from "../redux/campus/campus.action";

const EditCampus=()=>{
    const campus = useSelector((state) =>state.campuses.singleCampus);
    const dispatch = useDispatch();
    const history = useHistory();

    const {editForm, seteditForm}=useState({});

    useEffext(()=>{
        console.log('EDIT CAMPUS FIRING IN USE EFFECT');
        seteditForm(campus);


    },[campus]);
    
   
};

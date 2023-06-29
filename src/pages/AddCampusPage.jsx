import React from "react";;
import { useDispatch } from "react-redux";
import AddCampus from "../components/AddCampus";
import { addCampusThunk } from "../redux/campus/campus.action";

const AddCampusPage = () =>{
    const dispatch = useDispatch();

    const handleSubmit = (campus) =>{
        dispatch(addCampusThunk(campus));
    };

    return <AddCampus onsubmit={handleSubmit} />
};

export default AddCampusPage;
import React, {useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetechSingleCampusThunk } from "../redux/campus/campus.action";
import EditCampus from "../components/EditCampus";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const EditCampusPage =()=>{
    const { id } = useParams();
    const dispatch = useDispatch();

    //when the id change it will dispatch action and fetech data

    useEffect(()=>{
        dispatch(fetechSingleCampusThunk(id));
    },[id,dispatch]);

    return (
        <div>
            <Navbar />
            <h1>Edit Campus</h1>
            <EditCampus />
            <Footer />
        </div>
    );

};

export default EditCampusPage;
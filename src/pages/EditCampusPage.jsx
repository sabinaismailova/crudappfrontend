import React, {useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetechSingleCampusThunk } from "../redux/campus/campus.action";
import EditCampus from "../components/forms/EditCampus";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const EditCampusPage =()=>{
    //use to access the current params of the current router
    const { id } = useParams();
    const dispatch = useDispatch();

    //when the id or dispatch change it will dispatch action and fetech data

    //so when the id change, the func will call again to get the newest camps info
    useEffect(()=>{
        dispatch(fetechSingleCampusThunk(id));
    },[id,dispatch]);

    return (
        <div>
            <Navbar />
            <EditCampus />
            <Footer />
        </div>
    );

};

export default EditCampusPage;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCampusThunk } from "../redux/campus/campus.action";

const EditCampus = () => {
    const campus = useSelector((state) => state.campuses.singleCampus);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [editForm, seteditForm] = useState({});

    useEffect(() => {
        console.log('EDIT CAMPUS FIRING IN USE EFFECT');
        seteditForm(campus);


    }, [campus]);

    const handleEditSubmit = (event) => {
        event.preventDefault();
        console.log('RUNNING DISPATCH FROM EDITCAMPUSTHUNK');
        dispatch(editCampusThunk(editForm));
        navigate(`/campuses/${campus.id}`);
    };

    const HandleInputChange = (event) => {
        seteditForm({
            ...editForm,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={handleEditSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={editForm.name || ""} onChange={HandleInputChange} />

            </label>
            <label>
                Address:
                <input type="text" name="address" value={editForm.address || ""} onChange={HandleInputChange} />

            </label>
            <label>
                Image URL:
                <input type="text" name="imageUrl" value={editForm.imageUrl || ""} onChange={HandleInputChange} />
            </label>
            <label>
                Description:
                <textarea name="description" value={editForm.description || ""} onChange={HandleInputChange} />
            </label>
            <button type="submit">Save</button>
        </form>
    );




};

export default EditCampus;

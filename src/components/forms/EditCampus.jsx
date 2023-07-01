import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCampusThunk } from "../../redux/campus/campus.action";
import "./forms.css";
const EditCampus = () => {
  const campus = useSelector((state) => state.campuses.singleCampus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editForm, seteditForm] = useState({});

  useEffect(() => {
    console.log("EDIT CAMPUS FIRING IN USE EFFECT");
    seteditForm(campus);
  }, [campus]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITCAMPUSTHUNK");
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
    <div className="forms">
      <h1 className={"header"}>Edit Campus</h1>
      <form onSubmit={handleEditSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={editForm.name || ""}
          onChange={HandleInputChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={editForm.address || ""}
          onChange={HandleInputChange}
        />
        <label>Image URL: </label>
        <input
          type="text"
          name="imageUrl"
          value={editForm.imageUrl || ""}
          onChange={HandleInputChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={editForm.description || ""}
          onChange={HandleInputChange}
        />
        <button className="submitbtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditCampus;

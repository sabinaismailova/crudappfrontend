import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCampusThunk } from "../../redux/campus/campus.action";
import "./forms.css";
const EditCampus = () => {
  /**
   * campus is the value of singlrCampus from the Redux State
   * if singlecampus si updated in the redux state, the campus will also updated
   */
  const campus = useSelector((state) => state.campuses.singleCampus);
  const dispatch = useDispatch();

  //it use to change the route, when we edit the form, it will use to navigate to single campus view
  const navigate = useNavigate();
  /**
   * editform is the object to hold the info of the campus after we make change
   * seteditform: is the func use to chaneg the editform
   */
  const [editForm, seteditForm] = useState({});



  //set the editform be the campus we get from the api call
  //when the campus change, the func will run
  useEffect(() => {
    console.log("EDIT CAMPUS FIRING IN USE EFFECT");
    seteditForm(campus);
  }, [campus]);

  const handleEditSubmit = (event) => {
    //prevent the brower's default form submission event
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITCAMPUSTHUNK");

    //dispatch the action to the store
    dispatch(editCampusThunk(editForm));
    navigate(`/campuses/${campus.id}`);
  };
//change the value of the editCampus, this also use to handle the text field chgange
  const HandleInputChange = (event) => {
    seteditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  //html form to create the default form
  //the default value is defaylt campus info
  return (
    <div className="forms">
      <h1 className={"form-header"}>Edit Campus</h1>
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
          type="url"
          name="imageUrl"
          value={editForm.imageUrl || ""}
          onChange={HandleInputChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={editForm.description}
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

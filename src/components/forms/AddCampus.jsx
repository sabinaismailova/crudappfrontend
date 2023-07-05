import React, { useState } from "react";
import "./forms.css";
import { useNavigate } from "react-router-dom";
const AddCampus = ({ onSubmit }) => {
  const navigate = useNavigate();
  //default image for the campus
  // const defaultImageUrl = "https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/288/2019/03/19223634/Image-Coming-Soon-Placeholder.png";
  //newcampus: hold the campus info, setnewcampus:use to set the valuse of the  new campus
  const [newCampus, setnewCampus] = useState({
    // name: "",
    // address: "",
    // description: "",
    // imageUrl: defaultImageUrl,
  });
  //change the value of the newCampus, this also use to handle the text field chgange
  const HandleInputChange = (event) => {
    setnewCampus({
      ...newCampus,
      [event.target.name]: event.target.value,
    });
  };
  //when we click the button, we submit the new campus
  //here we use the props object, in the add componesnt, we call the thunk to call api to add campus
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newCampus);
    navigate('/campuses');
  };

  return (
    /**
     * the html file, we create the label form to allow the user to type the new information of the campus
     * handleinput change func will get the input to creat the object for the newCampus
     */
    <div className="forms">
      <h1 className="header">Campus Info</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newCampus.name}
          onChange={HandleInputChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={newCampus.address}
          onChange={HandleInputChange}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={newCampus.imageUrl}
          onChange={HandleInputChange}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newCampus.description}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Add Campus
        </button>
      </form>
    </div>
  );
};
export default AddCampus;

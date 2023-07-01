import React, { useState } from "react";
import "./forms.css";
import { useNavigate } from "react-router-dom";
const AddCampus = ({ onSubmit }) => {
  const navigate = useNavigate();
  const defaultImageUrl = "https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/288/2019/03/19223634/Image-Coming-Soon-Placeholder.png";
  const [newCampus, setnewCampus] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: defaultImageUrl,
  });

  const HandleInputChange = (event) => {
    setnewCampus({
      ...newCampus,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newCampus);
    navigate('/campuses');
  };

  return (
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
        <textarea
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

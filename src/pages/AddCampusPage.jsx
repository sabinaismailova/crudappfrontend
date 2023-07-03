import React from "react";
import { useDispatch } from "react-redux";
import AddCampus from "../components/forms/AddCampus";
import { addCampusThunk } from "../redux/campus/campus.action";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const AddCampusPage = () => {

  //dispatch the action to the store
  const dispatch = useDispatch();

  /**
   * dispatch the action, make the API call to add the new campus
   * @param {*} campus :refre to the new campus
   */
  const handleSubmit = (campus) => {
    dispatch(addCampusThunk(campus));
  };

  return (
    <div>
      <Navbar />
      <AddCampus onSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

export default AddCampusPage;

import React from "react";
import { useDispatch } from "react-redux";
import AddCampus from "../components/forms/AddCampus";
import { addCampusThunk } from "../redux/campus/campus.action";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const AddCampusPage = () => {
  const dispatch = useDispatch();

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

import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchSingleStudentThunk } from "../redux/students/student.action";
import EditStudent from "../components/forms/EditStudent";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function EditStudentPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleStudentThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <Navbar />
      <EditStudent />
      <Footer />
    </div>
  );
}

export default EditStudentPage;

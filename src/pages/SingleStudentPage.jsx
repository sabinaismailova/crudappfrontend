import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudentThunk } from "../redux/students/student.action";
import ListSingleStudent from "../components/ListSingleStudent";
import { useParams } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function SingleStudentPage() {
  const student = useSelector(state => state.students.singleStudent);
  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchSingleStudent = ()=>{
    console.log('RUNNING DISPATCH FROM FETCHSINGLESTUDENT');
    return dispatch(fetchSingleStudentThunk(id));
  };

  useEffect(()=>{
    console.log('FETCHING SINGLE STUDENT IN USE EFFECT');
    fetchSingleStudent();
  },[id]);



  return (
    <div>
      <Navbar />
      <ListSingleStudent student={student} />
      <Footer />
    </div>
  );
}

export default SingleStudentPage
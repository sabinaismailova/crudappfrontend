import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetechSingleCampusThunk } from "../redux/campus/campus.action";
import { fetchAllStudentsThunk } from "../redux/students/student.action";
import ListSingleCampus from "../components/ListSingleCampus/ListSingleCampus";
import { useParams } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function SingleCampusPage(){
    //get the singleCampus info from the redux
    const campus = useSelector(state => state.campuses.singleCampus);
    //get allStudents info from the redux
    const students = useSelector(state => state.students.allStudents);
    const dispatch = useDispatch();

    //get the id from the url
    const { id } = useParams();
    console.log(id);

    //fetech single campus info
    const fetechSingleCampus = ()=>{
        console.log('RUNNING DISPATCH FROM FETECHSINGLECAMPUS');
        return dispatch(fetechSingleCampusThunk(id));
    };

    //fetech all campuses info
    const fetchAllStudents = ()=>{
        console.log('RUNNING DISPATCH FROM FETECHALLSTUDENTS');
        return dispatch(fetchAllStudentsThunk());

    };
    
    //use to execute the two function 
    useEffect(()=>{
        console.log('FETCHING SINGLE CAMPUS AND ALL STUDENTS IN USE EFFECT');
        fetechSingleCampus();
        fetchAllStudents();
    },[]);

    //only get the students exists in current campus
    const campusStudents = students.filter(student => student.campusId===parseInt(id));
    console.log("CAMPUSES STUDENTS",campusStudents);
    return (
      <div>
        <Navbar />
        <ListSingleCampus campus={campus} students={campusStudents} />
        <Footer />
      </div>
    );


}

export default SingleCampusPage;
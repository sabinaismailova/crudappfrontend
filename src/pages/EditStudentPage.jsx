import React, {useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchSingleStudentThunk } from "../redux/students/student.action";
import EditStudent from "../components/EditStudent";

function EditStudentPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSingleStudentThunk(id));
    },[id,dispatch]);

  return (
    <div>
        <h1>Edit Student</h1>
        <EditStudent />
    </div>
  )
}

export default EditStudentPage
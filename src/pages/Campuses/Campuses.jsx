import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetechAllCampusesThunk } from '../../redux/campus/campus.action';
import ListAllCampuses from '../../components/ListAllCampuses/ListAllCampuses';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";
import './StyleCampuses.css';

function Campuses() {
  const dispatch = useDispatch();
  //get allcampuses info from the store
  const allcampuses = useSelector(state => state.campuses.allCampus);

  //execute the function
  useEffect(() => {
    console.log('FETECH ALL CAMPUSES FIRING IN USE EFFECT');
    //fetch all campuses info
    const fetechAllCampuses = () => {
      console.log('RUNNING DISPATCH FROM FETECHALLCAMPUSES');
      return dispatch(fetechAllCampusesThunk());
    };
    fetechAllCampuses();
  },[dispatch]);

  return (
    <div className="campus_page">
      <Navbar />
      <div className="campuses-page-header">
        <h1 className='all_campus_header'>All Campuses</h1>
        <Link to="/campuses/add">
          <button className='add_Campus_Button'>
            Add Campus
          </button>
        </Link>
      </div>
      <div className='campuses_container'>
        {allcampuses.length > 0 ? (
          allcampuses.map((campus) => (
            <ListAllCampuses key={campus.id} campus={campus} />
          ))
        ) : (
          <p>There are no campus resgerted in the database!</p>
        )}
      </div>

      <Footer />

    </div>
  );
}

export default Campuses;
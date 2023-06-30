import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetechAllCampusesThunk } from '../redux/campus/campus.action';
import ListAllCampuses from '../components/ListAllCampuses';
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";

function Campuses() {
  const dispatch = useDispatch();
  const allcampuses = useSelector(state => state.campuses.allCampus);

  const fetechAllCampuses = () => {

    console.log('RUNNING DISPATCH FROM FETECHALLCAMPUSES');
    return dispatch(fetechAllCampusesThunk());
  };

  useEffect(() => {
    console.log('FETECH ALL CAMPUSES FIRING IN USE EFFECT');

    fetechAllCampuses();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{
        textAlign:'center',
      }}>
      <h1>All Campuses List</h1>
      </div>
      <div style={{ 
        margin: "10px 40px",
        textAlign:'right',
      }}>
        <Link to="/campuses/add">
          <button style={{
            borderRadius:'10px',
            backgroundColor:'gray',
            width:'160px',
            height:'30px'
          }}>
            Add Campus
          </button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
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
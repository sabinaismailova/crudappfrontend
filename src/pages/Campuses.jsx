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
      <div style={{ marginTop: "20px" }}>
        <Link to="/campuses/add">
          <button>Add Campus</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Campuses;
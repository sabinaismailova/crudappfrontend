import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetechAllCampusesThunk } from '../redux/campus/campus.action';
import ListAllCampuses from '../components/ListAllCampuses';

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
      <div style={{
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <div>
          <h1 style={{
            textAlign: 'center'
          }}>Campuses List</h1>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/students">Students</Link>
              </li>
            </ul>
          </nav>
        </div>


        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          {allcampuses.length > 0 ? allcampuses.map(campus => (
            <ListAllCampuses key={campus.id} campus={campus} />
          )) : <p>
            There are no campus resgerted in the database!
          </p>
          }
        </div>

      </div>
      <div style={{ marginTop: '20px' }}>
        <div style={{
            textAlign:'center',
          }}>
        <Link to="/campuses/add">
          <button style={{
            width:'150px',
            height:'40px',
            borderRadius:'5px',
            backgroundColor:'lightblue',
            margin:'20px'

          }}>
            Add Campus
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Campuses;
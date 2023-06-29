import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetechAllCampusesThunk } from '../redux/campus/campus.action';
import ListAllCampuses from '../components/ListAllCampuses';

function Campuses() {
  const dispatch = useDispatch();
  const allcampuses = useSelector(state => state.campuses.allCampus);
  
  const fetechAllCampuses = ()=>{

    console.log('RUNNING DISPATCH FROM FETECHALLCAMPUSES');
    return dispatch(fetechAllCampusesThunk());
  };

  useEffect(()=>{
    console.log('FETECH ALL CAMPUSES FIRING IN USE EFFECT');

    fetechAllCampuses();
  },[]);

  return (
    <div style={{
      display:'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between'
    }}>

      {allcampuses.length>0 ? allcampuses.map(campus =>(
        <ListAllCampuses key={campus.id} campus={campus} />
      )) : <p>
           There are no campus resgerted in the database!
          </p>
        }
      
    </div>
  );
}

export default Campuses;
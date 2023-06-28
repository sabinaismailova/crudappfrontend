import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetechAllCampusesThunk } from '../redux/campus/campus.action';
import ListAllCampuses from '../components/ListAllCampuses';

function Campuses() {
  const dispatch = useDispatch();
  const allcampuses = useSelector(state => state.allcampuses);
  
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
      {allcampuses.map(campus =>(
        <ListAllCampuses key={campus.id} campus={campus} />
      ))}
      
    </div>
  );
}

export default Campuses;
import React, { useEffect } from 'react';
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getlocationfailure, getlocationrequest, getlocationsuccess } from '../Redux/action';

const Results = ({code}) => {

    const dispatch = useDispatch();
  const {location, isLoading, isError} = useSelector(store =>{
    return {
      location: store.location,
      isLoading: store.isLoading,
      isError: store.isError,
    }
  }, shallowEqual);

  console.log(code);
  console.log(location, isLoading, isError);

    const getData = () => {
        dispatch(getlocationrequest());
        axios.get(`https://api.zippopotam.us/in/${code}`).then(res =>{
          console.log(res.data);
          dispatch(getlocationsuccess(res.data))
        }).catch(err =>{
          console.log("Fail Fetching")
          dispatch(getlocationfailure())
        })
      }
    
      useEffect(()=>{
        getData()
      },[code])

  
      if(isLoading){
        return (
            <div>
            <h1>Loading...</h1>
        </div>
        )
      }
      return (
    <div>Results</div>
  )
}

export default Results
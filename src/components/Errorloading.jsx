import React, {useState, useEffect} from 'react';
import Load from '../components/Loadinggif';
import Error from '../components/Erorr';
import Tour from './Tour';

  const url = 'https://course-api.com/react-tours-project';
const Errorloading = () => {
  
    const [loading, setLoading]= useState(false);
    const [isError, setIsError]= useState(false);
    const [tourSpots, setTourSpots] = React.useState([]);
    const removeTrip = (id)=>{
      setTourSpots(tourSpots.filter((tour)=>tour.id !== id))
    }
    
    useEffect(()=>{
        getData()
        console.log('useEffect')
    },[])
    
    const getData = async()=>{
        try{
          setLoading(false)
          const response = await fetch(url);
          const tours = await response.json();
          setLoading(false);
          setTourSpots(tours);
        }
        catch(error){
          setIsError(true)
          console.log(error)
        }      
    }

    


    if(isError)
      return <div><h1><Error/></h1></div>
    else if(loading)
      return<div><Load/></div>
    else{
      console.log(tourSpots)
    return <div> 
        <Tour tours={tourSpots} remove={removeTrip}/>
      </div>
    }

    }
    

export default Errorloading;
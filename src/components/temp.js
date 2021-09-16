/*
import React, {useState, useEffect} from 'react';
import Load from '../components/Loadinggif';
import Error from '../components/Erorr';
import Spot from '../components/Spot';
const url = 'https://course-api.com/react-tours-project';

const Workinghour = () => {
    const [isLoading, setIsLoading]= useState(true);
    const [isError, setIsError]= useState(false);
    const [tourSpots, setTourSpots] = useState([]);

    const getData = async () => {
        const response = await fetch(url);
        const spots = await response.json();
        setTourSpots(spots);
    }

    useEffect(()=>{
        getData()
        .then(setIsLoading(false))
        .catch((error) =>{
            console.log(error)
            setIsError(true)
        })
    })

    
    if(isError){
    return(
        <div>
            <h1><Error/></h1>
        </div>
    )
    }
  if(isLoading){
    return(
      <div>
        <Load/>
      </div>
    )
  }

  return (
    <>
        <h1 id='pageHeader'>Our Tours</h1>
        
        <hr/>
        {
            tourSpots.map((spot) => {
                return <Spot key={spot.id} info={spot}/>
            })
        }
    </>
)
    };

export default Workinghour;
*/
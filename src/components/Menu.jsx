import React, { useState, useEffect } from 'react';
import Load from './Loadinggif';
import Error from './Erorr';
import Content from './content';
import data from '../util/data';
const check = 'https://api.github.com/users/QuincyLarson';

const Menu = () => {
    const [isLoading, setIsLoading]= useState(true)
    const [isError, setIsError]= useState(false)
    const [menu,setMenu]=useState(data)

    const filter = (category)=>{
      var temp = data.filter((item)=>item.category === category);
      setMenu(temp)
    }

    useEffect(()=>{
        fetch(check)
        .then((response)=>response.json())
        .then(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    },[])
    .catch((error)=>console.log(error))
    })
    if(isError){
    return(
        <div>
            <h1><Error/></h1>
        </div>
    )
    }else if(isLoading){
      return(
        <div>
          <Load/>
        </div>
      )
    }

  return <div>
    <h1 id='header'>Our Menu</h1>
    {<ul>
      <li><button id='tabs' onClick={()=>setMenu(data)}>All</button></li>
      <li><button id='tabs' onClick={()=>{filter("breakfast");}}>Breakfast</button></li>
      <li><button id='tabs' onClick={()=>{filter("lunch");}}>Lunch</button></li>
      <li><button id='tabs' onClick={()=>{filter("shakes");}}>Shake</button></li>
    </ul>}
    <Content filter={filter} menu={menu}/>
  </div>;
};

export default Menu;

import React from 'react'
// import tourSpots from '../components/Errorloading';

const Tour = ({tours,remove}) => {
    return (
        <div>
            <h1 id='pageHeader'>Our Tours</h1>
            <hr/>
            {tours.map((tour) => {
                const {id, name, image, info, price} = tour;
                return (
                    <article key={id}>
                        <div>
                            <h4 className='name'>{name}</h4><h4 className='price'>${price}</h4>
                        </div>
                        <img src={image} alt={id} className='images'/>
                        <hr />
                        <h5>{info}</h5>
                        <button id='not' onClick={()=>{remove(id)}}>Not Interested</button>
                        <hr></hr>
                    </article>
                )
            })}
        </div>
    )
}


export default Tour
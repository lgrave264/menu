import React from 'react'
import error from '../util/error.gif'

const Error = () => {
    return (
        <article className='fill'>
            <div><img src={error} alt="Loading..."/></div>
        </article>
    )
}

export default Error

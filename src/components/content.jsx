import React from 'react'
import image from './item-1.jpeg';

const Content = ({menu}) => {
    return menu.map((item)=>{
		const {id,title,price,img,desc}=item
		return(
			<div className='box' key={id}>
				<img id='images' src={img}/>
				<p id='title'>{title}<p id='price'>${price}</p></p>
				<hr/>
				<p id='desc'>{desc}</p>
			</div>
		)
	})
}
export default Content

import React from 'react';
import Card from './Card'
const Cardlist =({pokemon})=> {
	const cardComponent=pokemon.map((user,i)=> {

		return(
			<div className='tc' >
			<Card key={i} id={pokemon[i].id} name={pokemon[i].name} type={pokemon[i].type}/>
			</div>
		)
	})
	return (
		<div className='tc'   >
		    {cardComponent}
		</div>

	);
}


export default Cardlist;
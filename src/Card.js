import React from 'react';
const Card = (props) => {
	if(props.id <= 9) {
		return (
		<div className='bg-light-yellow dib br4 pa3 ma2 grow fl w-20 bw2 shadow-5 '>
		   <img alt='POKEMON' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${props.id}.png`}/>
		   <div>
		      <h2>{props.name}</h2>
		      <p><i>Type : </i>{props.type}</p>
		   </div>
		</div>

	);
	}  else {
		return (
		<div className= 'bg-light-yellow dib br4 pa3 ma2 grow fl w-20 bw2 shadow-5'>
		   <img alt='POKEMON' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${props.id}.png`}/>
		   <div>
		      <h2>{props.name}</h2>
		      <p><i>Type : </i>{props.type}</p>
		   </div>
		</div>

	);

	}
}

export default Card;
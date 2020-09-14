import React from 'react';

const Searchbox =({seachfield, searchChange})=> {

	return (
		<div className='pa2'>
		<input
		    className='pa3 ba br4 b--light-yellow bg-washed-yellow'
		    type='search' 
		    placeholder='search pokemons'
		    onChange={searchChange}
		/>
		</div>
	);
}

export default Searchbox;
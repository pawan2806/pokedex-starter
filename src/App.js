import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {pokemon} from './pokemon';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
	constructor(){
		super()
		this.state={
			pokemon:pokemon,
	        searchfield:''
		}
	}
	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({pokemon:users}));
	// }

	onSearchChange=(event)=> {
		this.setState({searchfield:event.target.value})
	}
	render(){
		const filterPokemon=this.state.pokemon.filter(pokemon => {
			return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return (
		<div className='tc'>
		    <h1 className='f1'>Pokedex</h1>
		    <Searchbox searchChange={this.onSearchChange}/>
		    <Scroll>
		    <Cardlist pokemon={filterPokemon}/>
		    </Scroll>
		</div>

	);
    }
}

export default App;

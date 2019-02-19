import React, {Component} from 'react';
import FuzzyAnimal from '../presentational/FuzzyAnimal'

class FuzzyAnimalCollection extends Component{

	//create state to hold info on animals
	//render two Fuzzy Animals
	constructor(){
		super()

		this.state ={
			animals: [{id: 1, "name": "FuzzyBird", "likes": 5}, {id: 2,"name": "FuzzyLamb", "likes": 0},{id:3, "name": "FuzzyCreature", "likes": 0}]
		}	
	
	}


	handleLike = (id)=>{

		const newAnimalArray = this.state.animals.map((animal)=> {

			if(animal.id === id){
				animal.likes ++
				return animal
			}
			else
				return animal
		})

		this.setState({
			animals: newAnimalArray

		})
	

	}

	render(){

		return(
			<div>
       	 {this.state.animals.map((x) => <FuzzyAnimal animal={x} id={x.id} handleLike={this.handleLike} />)}
        </div>
			)
	}

}

export default FuzzyAnimalCollection;
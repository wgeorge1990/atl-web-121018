import React, {Component} from 'react';
//import 'fuzzy-bird' from './fuzzy-bird.jpg'; 

class FuzzyAnimal extends Component{

//Fuzzy animal photo
//Like Amount
//Button to update Likes

//**** test if you need to call super(props)******/////
	constructor(props){
		super(props)
		this.state = {

			likes: 0
		}
	}

	handleLike = () => {
    this.setState(state => ({
      likes: this.state.likes + 1
    }));
  }


	render(){

		return(
			<div className="ui card">
			  <div className="image">
			    <img src={require('./fuzzy-bird.jpg')}/>
			    
			  </div>
			  <div className="content">
			    <a className="header">{this.state.likes}</a>
			    
			    <button className="ui teal basic button" onClick = {this.handleLike}>Like</button>
			  </div>
			  
			</div>
			)
	}
}

export default FuzzyAnimal;
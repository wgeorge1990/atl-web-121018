import React from 'react';
//import 'fuzzy-bird' from './fuzzy-bird.jpg'; 

const FuzzyAnimal = (props)=> {

	const id = props.id

	return(
		<div className="ui card">
			  <div className="image">
			    <img src={require('./fuzzy-bird.jpg')}/>
			  </div>
			  <div className="content">
			    <a className="header">{props.animal.name}</a>
			    <p className="header">{props.animal.likes}</p>
			  </div>
				<button className="ui teal button" onClick={()=> props.handleLike(id)}>Like</button>			  
		</div>
		)

}

export default FuzzyAnimal;
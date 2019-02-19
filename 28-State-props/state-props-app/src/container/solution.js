******///////FUZZYANIMALCOLLECTION///////*******
//create state to hold info on animals
	//render two Fuzzy Animals
	constructor(){
		super()
		this.state = {
			animals: [{id: 1, "name": "FuzzyBird", "likes": 0}, {id: 2,"name": "FuzzyLamb", "likes": 0},{id:3, "name": "FuzzyCreature", "likes": 0}],

		}
	}


	render(){
		return(
			<div >
       <div className="ui huge divided animated list">
        {this.state.animals.map(x => <FuzzyAnimal animal={x} handleClick={this.handleClick} id={x.id}/>)}

      </div>
    </div>
    
		)

	}



	handleClick = (id)=>{

		const myAnimal = this.state.animals.find((x)=> x.id=== id)
		
		const index = this.state.animals.indexOf(myAnimal)
		this.state.animals[index] = Object.assign(this.state.animals[index], {likes: myAnimal.likes++})
		const newAnimals = this.state.animals

		this.setState({

			animals: newAnimals

		})
		console.log("my animals likes" + myAnimal.likes)
		
	}

********///////FUZZYANIMAL//////*******


	const id = props.id




<div className="ui card">
			  <div className="image">
			    <img src={require('./fuzzy-bird.jpg')}/>
			  </div>
			  <div className="content">
			  	<p className="header">{props.animal.name}</p>
			    <a className="header">{props.animal.likes}</a>
			  </div>
				<button className="ui teal button" onClick={()=> props.handleClick(id)}>Like</button>			  
		</div>

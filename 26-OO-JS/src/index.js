// object literals


const susan ={src:".jpg", style:[3,4,6], name:"susan", favorite_food: "pizza"}

const jamal ={src:"", style:[3,3,3], name:"jamal"}


//Factory Functions

function createCharacter(name, age, favorite_food){

	const obj ={ name: name, age: age, favorite_food: favorite_food}

	obj.introduce = function(){

		console.log("what is this?", this)
		return `Hi I am ${obj.name} and I like ${obj.favorite_food}!`
	}

	obj.sayBye = function(){
		return "Goodbye"
	}
	return obj

}


const max = createCharacter("max", 13, "peanut butter")

const sasha = createCharacter("Sasha", 45, "sushi")



// constructor function MUST BE CALLED WITH NEW KEYWORD



function MyCharacter(name, age, favorite_food){

	this.name = name
	this.age = age
	this.favorite_food = favorite_food
	this.saying = "Hey there!"
	this.numberAndSaying = `seven and ${this.saying}`
	this.sayBye = function(){

		return "Goodbye!"
	}


}

const greg = new MyCharacter("Greg", 6, "cheezeits", function(){3+3})

const blair = new MyCharacter("Blair", 300, "cheezits", function(){2+2})

MyCharacter.prototype.introduce = function(){

	return `Hi I am ${this.name} and I like ${this.favorite_food}!`

}


// class syntax

class CharacterX {


	constructor(name, age, favorite_food){

		this.name = name
		this.age = age
		this.favorite_food = favorite_food
		this.sayBye 
	}

	introduce(){

		return `Hi I am ${this.name} and I like ${this.favorite_food}!`


	}

}

const safae = new CharacterX("Safae", 400, "tagine")

const mimi = new CharacterX("Mimi", 34, "fruit")


Character.prototype.sayBye = function(){

	return "GoodBye"
}





























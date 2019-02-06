//make characters different by specifying positionX and positionY 

class Character{


	constructor(){

	this.characterElement = document.createElement('img')

	this.speed = 15
	this.movement
	this.characterAssets = 'assets/character'

	}

	setCharacter(){

		this.characterElement.src = `${this.characterAssets}/static.gif`
		this.characterElement.style.position = 'relative'
		this.characterElement.style.left = '0px'
		this.characterElement.style.top = '0px'
		this.characterElement.style.width = '25px'
	}

	walkEast() {
	  stop()
	  this.movement = setInterval(()=> {
	    let currentPosition = parseInt(this.characterElement.style.left)
	    this.characterElement.style.left = currentPosition + 1 + 'px'
	  }, this.speed)
	  this.characterElement.src = `${this.characterAssets}/walkright.gif`
	}

	stop() {
  		clearInterval(this.movement)
  		this.characterElement.src = `${this.characterAssets}/static.gif`
}

}
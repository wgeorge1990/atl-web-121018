//"Controller" file is dealing with views functionality:
//a. adding event listeners and handlers
//b. grabbing data from forms and sending it to fetch calls
//c. making sure to render view appropriately 


const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false


// YOUR CODE HERE
document.addEventListener('DOMContentLoaded', displayAllToys)
toyForm.addEventListener('submit', submitToy)



addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


function submitToy(e){

e.preventDefault()
	const toyName = document.querySelector("input[name='name']").value
	const toyImage = document.querySelector("input[name='image']").value


	postToy(toyName,toyImage).
	then(displayToy)
	
	e.target.reset()
}


function likeToy(e){

	//send likevalue and id to a update fetch function
	//update likes in view 

	const card= e.target.parentNode
	let likeValue = parseInt(card.querySelector("p").textContent)
	likeValue++ 

	updateLike(likeValue, card.dataset.id)
	//Removed the function that renders likes because
	//it is less lines to do it in here! 
	card.querySelector("p").textContent = likeValue + " Likes"

}

// OR HERE!
function displayAllToys(toys){

		fetchAllToys().then((toys)=> {

			toys.forEach(renderToy)
		})

}

function displayToy(toy){

	renderToy(toy)
}
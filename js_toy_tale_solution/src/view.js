//View file deals with all things DOM selection and manipulation
//a. finding the right containers
//b. creating and adding elements with attribute classes and ids

function renderToy(toy){

		const container = document.querySelector("#toy-collection")

			const toyDisplay = document.createElement("div")

			toyDisplay.className = "card"

			toyDisplay.dataset.id = toy.id

			container.appendChild(toyDisplay)


			const toyTitle = document.createElement("h2")

			toyTitle.textContent = toy.name 

			toyDisplay.appendChild(toyTitle)


			const toyImage = document.createElement("img")

			toyImage.className = "toy-avatar"

			toyImage.src = toy.image

			toyDisplay.appendChild(toyImage)


			const toyLikes = document.createElement("p")

			toyLikes.textContent = toy.likes + " Likes"

			toyLikes.dataset.likes = toy.likes

			toyDisplay.appendChild(toyLikes)


			const likeBtn = document.createElement("button")

			likeBtn.className = "like-btn"

			likeBtn.textContent = "Like <3"

			toyDisplay.appendChild(likeBtn)

			likeBtn.addEventListener("click", likeToy)


}

function renderLike(likes, card){

	//attempting to update text without using innerHTML or textContent
	//not very successful; just an experiment

	const newLike = document.createElement("p")
	newLike.dataset.likes = likes + 1 

	newLike.textContent =( likes +1 ) + " Likes"

	card.insertBefore(newLike, parent.lastChild)

	card.querySelector("p").remove()

	

}
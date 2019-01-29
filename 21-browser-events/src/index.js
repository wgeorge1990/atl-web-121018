document.addEventListener('DOMContentLoaded', function(){

	console.log("loaded")

	//attach event listener to form

	const form = document.getElementById("comment-form")
	form.addEventListener("submit", handleSubmit)


	const container = document.getElementById("buttons-container")
	container.addEventListener("click", handleClicks)

})


function handleClicks(event){

	if(event.target.id ==="alert")
		window.alert("Hey THIS IS AN IMPORTANT ALERT!")
	else if(event.target.id ==="log")
		console.log("This is not so important")
	else if(event.target.id === "error")
		console.error("This is a horrible error!")

}


function handleSubmit(event){

	event.preventDefault()
	//this is to make sure the form doesn't send an automated POST request

	const inputElement = document.getElementById("new-comment")
	
	const comments = document.getElementById("comments-container")

	const newComment = document.createElement("p")

	const button = document.createElement("button")

	button.textContent = "New Random Button"

	button.addEventListener("click", function(){
		console.log("hey let's add event listeners!")
	})

	newComment.textContent = inputElement.value

	comments.appendChild(newComment)
	comments.appendChild(button)

	event.target.reset()


}
//write the handler to add comment to HTML
//API file is dealing with all requests, 
//GET, POST, PATCH, AND DELETE 

function fetchAllToys(){

	const URL = "http://localhost:3000/toys"

	return fetch(URL).
	catch((error)=> console.log(error))
	.then((response) => {return response.json()})
}


function postToy(name, image){
	//post to 
	URL = "http://localhost:3000/toys"
	const data = {

		name: name, 
		image: image,
		likes: 0 
	}
	return fetch(URL, {
		headers: {
			'Content-Type': "application/json"
		},
		method: 'POST',
		body: JSON.stringify(data)
	}).then((response)=> {return response.json()})	
}


function updateLike(likesValue, id){


	URL = `http://localhost:3000/toys/${id}`

	const newLikes = {
		likes: likesValue 
	}

	fetch(URL, {

		headers:{
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		method: 'PATCH',
		body: JSON.stringify(newLikes)

	})

}
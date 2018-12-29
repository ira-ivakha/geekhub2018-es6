document.getElementById("form_address").addEventListener("submit", getTag);
function getTag(e) {
	e.preventDefault();
	var tagString = document.getElementById('tag').value.replace(/ /g, '+');
	
	console.log(tagString);
	
	if (tagString.length) {
		
		var url = "https://api.giphy.com/v1/stickers/random?api_key=Azv5vPfwX6BD6BNj8RlMoPDaJtShmNVC&tag="+tagString+"&rating=PG";
		
		fetch(url)
			.then(function(response) {
				console.log('1st promise ', response); // 200
				if (response.status == 200)
					return response.json();
			})
			.then(function(response) {
				console.log('2nd promise ',response);
				var gifString = response.data.images.original.url;
				var gifImage = document.createElement('img');
				gifImage.setAttribute('src', gifString);
				document.getElementById('gif').innerHTML = '';
				document.getElementById('gif').appendChild(gifImage);
			})
			.catch( alert );
	}
}
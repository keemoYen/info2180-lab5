window.onload =function(){
	var myButton = document.querySelector("#lookup");
	var citiesButton = document.querySelector("#citieslook")
	var httpRequest;
	
	myButton.onclick = function(element){
		element.preventDefault();
		
		httpRequest = new XMLHttpRequest();
		var name = document.querySelector('#country').value;
		console.log(name);
		//alert(name);
		
		
		var url = 'world.php';
		httpRequest.onreadystatechange = loadCountry;
		httpRequest.open('POST',url);
		httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

		httpRequest.send('country='+ encodeURIComponent(name));
	};
	
	citiesButton.onclick = function(element){
		element.preventDefault();

		httpRequest = new XMLHttpRequest();
		var name= document.querySelector('#country').value;
		alert('button clicked');

		var url = 'world.php';
		httpRequest.onreadystatechange = loadCities;
		httpRequest.open('POST',url);
		httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

		httpRequest.send('cities='+encodeURIComponent(name));
	};


	function loadCountry(){
		if(httpRequest.readyState === XMLHttpRequest.DONE){
			if(httpRequest.status=== 200){
				var response = httpRequest.responseText;
				var display = document.querySelector('#result');
				display.innerHTML = response;
				//alert("hello")
			}
		}
	}

	function loadCities(){
		if(XMLHttpRequest.readyState === XMLHttpRequest.DONE){
			if(httpRequest.status === 200){
				var response = httpRequest.responseText;
				var display = document.querySelector('#result');
				display.innerHTML = response;
			}
		}
	}
}
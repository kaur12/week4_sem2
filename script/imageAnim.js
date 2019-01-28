(() => {
	// Select elements that you want to work with
	let theButton = document.querySelector("#buttonHeader img");
	// window.addEventListener("load", changeHeaderText);

	//functions go in the mmiddle
	function changeHeaderText() {
		document.querySelector("h1").textContent = "Hey There from Javascript!"
	}

	//event handling goes at the bottom
	theButton.addEventListener("click", changeHeaderText);
	// set up the puzzle pieces and boards
	
})();

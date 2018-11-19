window.onload =function handler() {

	var walls =document.querySelectorAll('div.boundary');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('onmouseover','colorChange()');
	}
};

function colorChange() {
	var walls =document.querySelectorAll('div.boundary');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color:#ff8888');
	}
	
}

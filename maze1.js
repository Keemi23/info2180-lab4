window.onload =function handler() {

	var walls =document.getElementsByTagName('div');
	
	for (var i =2; i <=6; i++) {
		walls[i].setAttribute('onmouseover','colorChange(this)');
	}
	
};

function colorChange(element) {
	element.setAttribute('style','background-color:#ff8888');
}

window.onload =function handler() {

	var start =document.getElementById('start');
	var win =document.getElementById('end');
	var walls =document.querySelectorAll('div.boundary');

	start.setAttribute('onclick','reset()');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('onmouseover','colorChange()');
	}

	win.setAttribute('onmouseover','Success()');
};

function colorChange() {
	
	alert('You Lose!');
	var walls =document.querySelectorAll('div.boundary');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color:#ff8888');
	}	
}

function Success() {

	if(document.getElementById('boundary1').getAttribute('style') == 'background-color:#ff8888') {
		alert('You must go through the maze \nwithout hitting the walls!');
	}	
	else {
		alert('You Win!');
	}
}

function reset() {
	var walls =document.querySelectorAll('div.boundary');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color: #eeeeee');
	}
}

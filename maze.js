window.onload =function handler() {

	var start =document.getElementById('start');
	var win =document.getElementById('end');
	var walls =document.querySelectorAll('div.boundary');

	start.setAttribute('onmouseover','gameStarted()');
	start.setAttribute('onmouseout','validPlay()');
	start.setAttribute('onclick','init()');

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('onmouseover','testTraversal()');
	}

	win.setAttribute('onmouseover','victory()');
};

var started =false;

function gameStarted() {
	started =true;
}

function testTraversal() {
	if (started) {
		var walls =document.querySelectorAll('div.boundary');
		document.getElementById('status').innerHTML ='You Lose!';
		
		for (var i =0; i <=4; i++) {
			walls[i].setAttribute('style','background-color:#ff8888');
		}
	}	
}

function victory() {

	if(document.getElementById('boundary1').getAttribute('style') == 'background-color:#ff8888') {
		document.getElementById('status').innerHTML ='You Lose!';
	}	
	else {
		if (started) {
			document.getElementById('status').innerHTML ='You Win!';
		}
		else {
			document.getElementById('status').innerHTML ='Sorry!\n<br />You must go through the maze\n<br />without hitting the walls';
		}
	}
}

function init() {

	var walls =document.querySelectorAll('div.boundary');
	document.getElementById('status').innerHTML ='Move your mouse over the "S" to begin.';

	for (var i =0; i <=4; i++) {
		walls[i].setAttribute('style','background-color: #eeeeee');
	}
}

function validPlay() {

	var divLeftParam =document.getElementById('maze').offsetLeft;
	var locateMouse =event.clientX;

	if(locateMouse < divLeftParam) {
		document.getElementById('status').innerHTML ='Sorry!\n<br />You must go through the maze\n<br />without hitting the walls';
		return false;
	}
	else {
		return true;
	}
}

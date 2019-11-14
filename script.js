// use variables to simplify your life!
var a = document.getElementById("img1");
var b = document.getElementById("img2");
var c = document.getElementById("img3");
var d = document.getElementById("img4");
var e = document.getElementById("img5");
var f = document.getElementById("img6");
var g = document.getElementById("img7");
var h = document.getElementById("img8");
var main = document.getElementById("mainatt");

rand = Math.floor(Math.random() * 3);
rmain = Math.floor(Math.random() * 3);
rblck = Math.floor(Math.random() * 3);
setMainImg();
playStart();

function setMainImg(){
	if (rand == 0) {
		main.src = "images/starter1.jpg";
	} 
	else if ( rand == 1){
		main.src = "images/starter2.jpg";
	}
	else if ( rand == 2) {
		main.src = "images/starter3.jpg";
	}
}

function playStart() {
	var audio = new Audio('audio/purpandyellow.wav');
	audio.play();
}

function clickOne(){
	rone = Math.floor(Math.random() * 3);
	if (rone == 0) {
		main.src = "images/lebron1.png";
		a.src = "images/lebron2.gif";
	} 
	else if (rone == 1){
		main.src = "images/lebron.gif";
		a.src = "images/labron.jpg";
	}
	else if (rone == 2) {
		main.src = "images/lebron2.jpg";
		a.src = "images/lebron3.gif";
	}
	var audio = new Audio('audio/lebron.wav');
	audio.play();
}

function clickTwo(){
	rtwo = Math.floor(Math.random() * 3);
	if (rmain == 0) {
		main.src = "images/lebron1.png";
	} 
	else if (rmain == 1){
		main.src = "images/caruso.gif";
	}
	else if (rmain == 2) {
		main.src = "images/dgreen.png";
	}
	var audio = new Audio('audio/caruso.wav');
	audio.play();
}

function clickThree(){
	main.src = "images/dgreen.gif";
	c.src = "images/dgreen.jpg";
	var audio = new Audio('audio/dgreen.wav');
	audio.play();
}

function clickFour(){
	rfour = Math.floor(Math.random() * 2);
	main.src = "images/dwight.gif";
	if (rfour == 0) {
		d.src = "images/dwight.jpg";
	}
	if (rfour == 1) {
		d.src = "images/dwight.jfif";
	}
	var audio = new Audio('audio/dwight.wav');
	audio.play();
}

function clickFive(){
	rmain = Math.floor(Math.random() * 3);
	rblck = Math.floor(Math.random() * 3);
	if (rmain == 0) {
		main.src = "images/lebron1.png";
	} 
	else if (rmain == 1){
		main.src = "images/caruso.gif";
	}
	else if (rmain == 2) {
		main.src = "images/dgreen.png";
	}
	var audio = new Audio('audio/caruso.wav');
	audio.play();
}

function clickSix(){
	rmain = Math.floor(Math.random() * 3);
	rblck = Math.floor(Math.random() * 3);
	if (rmain == 0) {
		main.src = "images/lebron1.png";
	} 
	else if (rmain == 1){
		main.src = "images/caruso.gif";
	}
	else if (rmain == 2) {
		main.src = "images/dgreen.png";
	}
	var audio = new Audio('audio/caruso.wav');
	audio.play();
}

function clickSeven(){
	rseven = Math.floor(Math.random() * 3);
	if (rseven == 0) {
		main.src = "images/caruso5.jpg";
		g.src = "images/caruso.jfif";
	} 
	else if (rseven == 1){
		main.src = "images/caruso.gif";
		g.src = "images/caruso4.jpg";
	}
	else if (rseven == 2) {
		main.src = "images/caruso2.jpg";
		g.src = "images/caruso3.jpg";
	}
	
	var audio = new Audio('audio/caruso.wav');
	audio.play();
}

function clickEight(){
	rmain = Math.floor(Math.random() * 3);
	rblck = Math.floor(Math.random() * 3);
	if (rmain == 0) {
		main.src = "images/lebron1.png";
	} 
	else if (rmain == 1){
		main.src = "images/caruso.gif";
	}
	else if (rmain == 2) {
		main.src = "images/dgreen.png";
	}
	var audio = new Audio('audio/caruso.wav');
	audio.play();
}
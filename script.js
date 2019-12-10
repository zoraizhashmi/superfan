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
var	audiostart = new Audio('audio/purpandyellow.wav');
var audio1 = new Audio('audio/lebron.wav');
var audio2 = new Audio('audio/kuzma.wav');
var audio3 = new Audio('audio/dgreen.wav');
var audio4 = new Audio('audio/dwight.wav');
var audio5 = new Audio('audio/javale.wav');
var audio6 = new Audio('audio/rondo.wav');
var audio7 = new Audio('audio/caruso.wav');
var audio8 = new Audio('audio/ad.wav');


rand = Math.floor(Math.random() * 3);
setMainImg();
playStart();

function openPast(){
	window.open("past.html", '_self');
}
function openFuture(){
	window.open("future.html", '_self');
}

function reloadPage() {
	location.reload();
}

function stopSound() {
	audiostart.pause();
	audiostart.currentTime = 0;
	audio1.pause();
	audio1.currentTime = 0;
	audio2.pause();
	audio2.currentTime = 0;
	audio3.pause();
	audio3.currentTime = 0;
	audio4.pause();
	audio4.currentTime = 0;
	audio5.pause();
	audio5.currentTime = 0;
	audio6.pause();
	audio6.currentTime = 0;
	audio7.pause();
	audio7.currentTime = 0;
	audio8.pause();
	audio8.currentTime = 0;
}

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

function openFuture(){
	window.open("future.html", '_self');
}

function playStart() {
	audiostart.play();
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
	stopSound();
	audio1.play();
}

function clickTwo(){
	rmain = Math.floor(Math.random() * 3);
	if (rmain == 0) {
		main.src = "images/kuzma.jpg";
		b.src = "images/kuzma.gif";
	} 
	else if (rmain == 1){
		main.src = "images/kuzma2.gif";
		b.src = "images/kuzma2.jpg";
	}
	else if (rmain == 2) {
		main.src = "images/kuzma3.gif";
		b.src = "images/kuzma3.jpg";
	}
	stopSound();
	audio2.play();
}

function clickThree(){
	main.src = "images/dgreen.gif";
	c.src = "images/dgreen.jpg";
	stopSound();
	audio3.play();
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
	stopSound();
	audio4.play();
}

function clickFive(){
	rfive = Math.floor(Math.random() * 2);
	main.src = "images/javale.jpg";
	if (rfive == 0) {
		e.src = "images/javale2.gif"
	}
	if (rfive == 1) {
		e.src = "images/javale.gif"
	}
	stopSound();
	audio5.play();
}

function clickSix(){
	main.src = "images/rondo.jpg";
	f.src = "images/rondo.gif";
	stopSound();
	audio6.play();
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
	stopSound();
	audio7.play();
}

function clickEight(){
	rmain = Math.floor(Math.random() * 4);
	if (rmain == 0) {
		main.src = "images/ad.gif";
		h.src = "images/ad.jpg";
	} 
	else if (rmain == 1){
		main.src = "images/ad2.jpg";
		h.src = "images/ad2.gif";
	}
	else if (rmain == 2) {
		main.src = "images/ad4.jpg";
		h.src = "images/ad.jfif";
	}
	else if (rmain == 3) {
		main.src = "images/ad3.jpg";
		h.src = "images/ad3.gif";
	}
	stopSound();
	audio8.play();
}

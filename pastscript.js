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
		main.src = "images/pstarter1.jpg";
	} 
	else if ( rand == 1){
		main.src = "images/pstarter2.jpg";
	}
	else if ( rand == 2) {
		main.src = "images/pstarter3.jpg";
	}
}

function openPast(){
	window.open("index.html", '_self');
}
function openFuture(){
	window.open("future.html", '_self');
}

function playStart() {
	var audio = new Audio('audio/purpandyellow.wav');
	audio.play();
}

function clickOne(){
	rmain = Math.floor(Math.random() * 4);
	if (rmain == 0) {
	main.src = "images/kobe1.jpg";
	a.src = "images/kobe1.gif";
	} 
	else if (rmain == 1) {
	main.src = "images/kobe2.gif";
	a.src = "images/kobe2.jpg";
	} 
	else if (rmain == 2) {
	main.src = "images/kobe3.jpg";
	a.src = "images/kobe3.gif";
	} 	
	else if (rmain == 3) {
	main.src = "images/kobe4.gif";
	a.src = "images/kobe4.jpg";
	} 
	var audio = new Audio('audio/kobe.wav');
	audio.play();
}

function clickTwo(){
	main.src = "images/harden.jpg";
	b.src = "images/harden2.jpg";
	var audio = new Audio('audio/harden.wav');
	audio.play();
}

function clickThree(){
	rmain = Math.floor(Math.random() * 2);
	main.src = "images/zion.jpg";
	if (rmain == 0) {
	c.src = "images/zion1.jpg";
	} 
	else if (rmain == 1) {
	c.src = "images/zion2.jpg";
	} 
	var audio = new Audio('audio/zion.wav');
	audio.play();
}

function clickFour(){
	main.src = "images/curry.jpg";
	d.src = "images/curry2.jpg";
	var audio = new Audio('audio/curry.wav');
	audio.play();
}

function clickFive(){
	main.src = "images/westbrook.jpg";
	e.src = "images/westbrook2.jpg";
	var audio = new Audio('audio/westbrook.wav');
	audio.play();
}

function clickSix(){
	rmain = Math.floor(Math.random() * 2);
	main.src = "images/kd.jpg";
	if (rmain == 0) {
	f.src = "images/kd2.jpg";
	} 
	else if (rmain == 1) {
	f.src = "images/kd3.jpg";
	} 
	var audio = new Audio('audio/kd.wav');
	audio.play();
}

function clickSeven(){
	main.src = "images/jbutler2.jpg";
	g.src = "images/jbutler.jpg";
	var audio = new Audio('audio/butler.wav');
	audio.play();
}

function clickEight(){
	rmain = Math.floor(Math.random() * 2);

	main.src = "images/dame.jpg";
	h.src = "images/dame2.jpg";
	if (rmain == 0) {
	var audio = new Audio('audio/dame.wav');
	audio.play();
	} 
	else if (rmain == 1) {
	var audio = new Audio('audio/dame2.wav');
	audio.play();
	} 
}
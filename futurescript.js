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
var audio1 = new Audio('audio/giannis.wav');
var audio2 = new Audio('audio/harden.wav');
var audio3 = new Audio('audio/zion.wav');
var audio4 = new Audio('audio/curry.wav');
var audio5 = new Audio('audio/westbrook.wav');
var audio6 = new Audio('audio/kd.wav');
var audio7 = new Audio('audio/butler.wav');
var audio8 = new Audio('audio/dame.wav');

rand = Math.floor(Math.random() * 3);
setMainImg();




function setMainImg(){
	if (rand == 0) {
		main.src = "images/fstarter1.jpg";
	} 
	else if ( rand == 1){
		main.src = "images/fstarter2.jpg";
	}
	else if ( rand == 2) {
		main.src = "images/fstarter3.jpg";
	}
}

function openPast(){
	window.open("past.html", '_self');
}

function openFuture(){
	window.open("index.html", '_self');
}

function reloadPage() {
	location.reload();
}

function stopSound() {
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


function clickOne(){
	main.src = "images/giannis.jpg";
	a.src = "images/giannis2.jpg";
	stopSound();
	audio1.play();
}

function clickTwo(){
	main.src = "images/harden.jpg";
	b.src = "images/harden2.jpg";
	stopSound();
	audio2.play();
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
	stopSound();
	audio3.play();
}

function clickFour(){
	rmain = Math.floor(Math.random() * 2);
	main.src = "images/curry1.jpg";
	if (rmain == 0) {
	d.src = "images/curry2.jpg";
	} 
	else if (rmain == 1) {
	d.src = "images/curry3.jpg";
	}
	stopSound();
	audio4.play();
}

function clickFive(){
	main.src = "images/westbrook1.jpg";
	e.src = "images/westbrook2.jpg";
	stopSound();
	audio5.play();
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
	stopSound();
	audio6.play();
}

function clickSeven(){
	main.src = "images/jbutler2.jpg";
	g.src = "images/jbutler.jpg";
	stopSound();
	audio7.play();
}

function clickEight(){
	main.src = "images/dame.jpg";
	h.src = "images/dame2.jpg";
	stopSound();
	audio8.play();
}

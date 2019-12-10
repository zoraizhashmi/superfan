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
var startaudio = new Audio('audio/pstart.wav');
var audio1 = new Audio('audio/kobe.wav');
var audio2 = new Audio('audio/magic.wav');
var audio3 = new Audio('audio/wilt.wav');
var audio4 = new Audio('audio/west.wav');
var audio5 = new Audio('audio/elgin.wav');
var audio6 = new Audio('audio/mikan.wav');
var audio7 = new Audio('audio/shaq.wav');
var audio8 = new Audio('audio/kareem.wav');


rand = Math.floor(Math.random() * 3);
setMainImg();

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
	stopSound();
	audio1.play();
}

function clickTwo(){
	main.src = "images/magic.jpg";
	b.src = "images/magic.gif";
	stopSound();
	audio2.play();
}

function clickThree(){
	rmain = Math.floor(Math.random() * 2);
	main.src = "images/wilt.gif";
	c.src = "images/wilt.jpg"; 
	stopSound();
	audio3.play();
}

function clickFour(){
	main.src = "images/west.gif";
	d.src = "images/west.jpg";
	stopSound();
	audio4.play();
}

function clickFive(){
	main.src = "images/elgin2.gif";
	e.src = "images/elgin2.jpg";
	stopSound();
	audio5.play();
}

function clickSix(){
	main.src = "images/mikan1.jpg";
	f.src = "images/mikan2.jpg";
	stopSound();
	audio6.play();
}

function clickSeven(){
	main.src = "images/shaq.gif";
	g.src = "images/shaq.jpg";
	stopSound();
	audio7.play();
}

function clickEight(){
	rmain = Math.floor(Math.random() * 2);
	main.src = "images/kareem.gif";
	h.src = "images/kareem.jpg";
	stopSound();
	audio8.play();
}

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
setMainImg()

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

function clickOne(){
	main.src = "images/lebron1.png"
	var audio = new Audio('audio/lebron.mp3');
	audio.play();}
var buttons = document.querySelectorAll(".slide-slider-item");
var slide = document.querySelector(".slide");
var img = document.querySelector(".slide-main-img");
var part1Background = document.querySelector(".hidden");

var background = ["img/back2.jpg", "img/slide-background.jpg", "img/back3.jpg"];
buttons[2].onclick = function () {
	buttons[1].classList.remove("chosen");
	buttons[0].classList.remove("chosen");
	buttons[2].classList.add("chosen");
	slide.style.backgroundImage = "url(" + background[2] + ")";
	img.style.display = "none";
	slide.style.backgroundSize = "cover";
	part1Background.style.display = "none";
}
buttons[0].onclick = function () {
	buttons[1].classList.remove("chosen");
	buttons[2].classList.remove("chosen");
	buttons[0].classList.add("chosen");
	slide.style.backgroundImage = "url(" + background[0] + ")";
	img.style.display = "none";
	slide.style.backgroundSize = "cover";
	part1Background.style.display = "none";
}
buttons[1].onclick = function () {
	buttons[0].classList.remove("chosen");
	buttons[2].classList.remove("chosen");
	buttons[1].classList.add("chosen");
	slide.style.backgroundImage = "url(" + background[1] + ")";
	img.style.display = "none";
	slide.style.backgroundSize = "cover";
	part1Background.style.display = "none";
}
var news = document.querySelectorAll(".news-img");
var ButtonRight = document.querySelectorAll(".right");
var newsImg = ["img/news-first.png", "img/news-second.png", "img/news-third.png", "img/news-fourth.png"];
var ButtonLeft = document.querySelectorAll(".left")

var i = 0;
ButtonRight[0].onclick = function () {
	i++;
	if (i > 3) {
		i = 0;
	}
	news[0].src = newsImg[i];
}


var i = 1;
ButtonRight[1].onclick = function () {
	i++;
	if (i > 3) {
		i = 0;
	}
	news[1].src = newsImg[i];
}


var i = 3;
ButtonRight[2].onclick = function () {
	i++;
	if (i > 3) {
		i = 0;
	}
	news[3].src = newsImg[i];
}

var i = 0;
ButtonLeft[0].onclick = function () {
	i--;
	if (i < 0) {
		i = 3;
	}
	console.log(i)
	news[0].src = newsImg[i];
}


var i = 1;
ButtonLeft[1].onclick = function () {
	i--;
	if (i < 0) {
		i = 3;
	}
	news[1].src = newsImg[i];
}

var i = 3;
ButtonLeft[2].onclick = function () {
	i--;
	if (i < 0) {
		i = 3;
	}
	news[3].src = newsImg[i];
}


var contactContainer = document.querySelectorAll(".contact-name");
var contactField = document.querySelectorAll(".contact-field");
contactContainer[0].onclick = function () {
	contactField[0].classList.add("first")
}

contactContainer[1].onclick = function () {
	contactField[1].classList.add("first")
}
contactContainer[2].onclick = function () {
	contactField[2].classList.add("first")
}
contactContainer[3].onclick = function () {
	contactField[3].classList.add("first")
}
var contactTextarea = document.querySelector(".contact-textarea");
var contactComment = document.querySelector(".contact-comment");
contactTextarea.onclick = function () {
	contactComment.classList.add("second")
}
var part1 = document.querySelector(".slide")
var cycle = document.querySelectorAll(".figure");
var part1Img = document.querySelector(".slide-main-img");
var part2 = document.querySelector(".about");

part1.onwheel = function () {
	cycle[2].classList.add("cycle");
	cycle[1].classList.add("cycle-up");
	cycle[0].classList.add("cycle-right");
	part1Img.classList.add("opacity");
	part1Background.classList.add("show");
}
var i = 0;
part2.onmouseover = function () {
	cycle[3].classList.add("animation");
	cycle[3].classList.add("opacity");
}
$('.fa-angle-down').on('click',function(){
	$('.header-menu').toggle('header__toggle');
})
$('.header-menu').on('click',function(){
	$('.header-menu').toggle('header__toggle')
})

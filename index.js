const pages = document.querySelectorAll(".page");
    let current_translate = 0;

slide = (pagename) => {
// direction === "next" ? translate -= translateAmount : translate += translateAmount;
let translate = 0;

if (pagename == "home") {
  translate = 0;
} else if (pagename == "webdev") {
  translate = -100;
} else if (pagename == "currentposition") {
  translate = -200;
} else if (pagename == "graphd") {
  translate = -300;
} else if (pagename == "photog") {
  translate = -400;
} else if (pagename == "music") {
  translate = -500;
} else if (pagename == "resume") {
  translate = -600;
}
pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );

window.scrollTo(0, 0);
}

var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += " active";
}

function toggleEmail() {
  console.log("this works!");

  var x = document.getElementById("emailaddy");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
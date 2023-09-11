const pages = document.querySelectorAll(".page");
    let current_translate = 0;

slide = (pagename) => {
// direction === "next" ? translate -= translateAmount : translate += translateAmount;
let translate = 0;

let navids = ["link1", "link2", "link3", "link4", "link5", "link6"];
let navlinks = [];

for (id in navids) {
  navlinks.push(document.getElementById(navids[id]));
}

for (link in navlinks) {
  navlinks[link].style.fontSize = "21px";
  navlinks[link].style.fontWeight = "normal";
  navlinks[link].style.lineHeight = "1px";
  navlinks[link].style.fontStyle = "normal";
}

document.body.style.overflowY = "hidden";

if (pagename == "home") {
  translate = 0;
  // document.getElementById("nametitle").style.color = "white";
} else if (pagename == "webdev") {
  navlinks[0].style.fontSize = "35px";
  navlinks[0].style.fontWeight = "bold";
  navlinks[0].style.lineHeight = "0px";
  navlinks[0].style.fontStyle = "italic";
  translate = -100;
} else if (pagename == "graphd") {
  navlinks[1].style.fontSize = "35px";
  navlinks[1].style.fontWeight = "bold";
  navlinks[1].style.lineHeight = "0px";
  navlinks[1].style.fontStyle = "italic";
  document.body.style.overflowY = "scroll";
  translate = -200;
} else if (pagename == "photog") {

  navlinks[2].style.fontSize = "35px";
  navlinks[2].style.fontWeight = "bold";
  navlinks[2].style.lineHeight = "0px";
  navlinks[2].style.fontStyle = "italic";
  translate = -300;
} else if (pagename == "personal") {
  navlinks[3].style.fontSize = "35px";
  navlinks[3].style.fontWeight = "bold";
  navlinks[3].style.lineHeight = "0px";
  navlinks[3].style.fontStyle = "italic";
  translate = -400;
} else if (pagename == "upto") {
  navlinks[4].style.fontSize = "35px";
  navlinks[4].style.fontWeight = "bold";
  navlinks[4].style.lineHeight = "0px";
  navlinks[4].style.fontStyle = "italic";
  document.body.style.overflowY = "scroll";
  translate = -500;
} else if (pagename == "resume") {
  navlinks[5].style.fontSize = "35px";
  navlinks[5].style.fontWeight = "bold";
  navlinks[5].style.lineHeight = "0px";
  navlinks[5].style.fontStyle = "italic";
  document.body.style.overflowY = "scroll";
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

function toggleEmailMobile() {

  var x = document.getElementById("emailaddymobile");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"
  }
   // Copy the text inside the text field
  navigator.clipboard.writeText("vikkiw123@gmail.com");

}

function toggleEmailPC() {

  var x = document.getElementById("emailaddyPC");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"
  }
   // Copy the text inside the text field 
   //comment to test push
  navigator.clipboard.writeText("vikkiw123@gmail.com");

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}


var slideIndex2 = 1;
showSlides2(slideIndex);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}


function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slide2");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}




var slideIndex3 = 1;
showSlides3(slideIndex);

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}


function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("slide3");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}

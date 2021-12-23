// Shorthand for $( document ).ready()
$(function() {

// Aos Init Starts
  AOS.init({once: true});
// Aos Init Ends


// Back To Top CSS Starts



//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Back To Top CSS Ends

// Home Slick Slider Starts

 $('.home_wcs_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  dots:true,
  arrows: false,
  });


// Home Slick Slider Ends

});
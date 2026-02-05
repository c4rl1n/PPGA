//When # is clicked: (on-click-event snippet)
//  show Slide 1
// $("#initiatives").click(function(){
// showSlide(1)
// });
$(document).ready(function() {
  $("#carousel-pic-2").addClass("hidden");
  $("#carousel-pic-3").addClass("hidden");
  $("#carousel-pic-4").addClass("hidden");
  $("#carousel-pic-5").addClass("hidden");
  $("#carousel-pic-6").addClass("hidden");
  $("#carousel-pic-7").addClass("hidden");
  $("#carousel-pic-8").addClass("hidden");
});
//When #arrow-2 is clicked: (on-click-event snippet)
//  show next slide (next slide snippet)
$("#arrow2").click(function(){
    nextSlide()
});
$("#arrow1").click(function(){
    prevSlide()
});

const SLIDES = $(".carouselpics");
const DOTS = $(".dot");

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".carouselpics:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}


/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".carouselpics:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentDot = DOTS.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  DOTS.removeClass("currdot");
}

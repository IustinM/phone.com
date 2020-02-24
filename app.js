const navSlide = () => {
    const burger = document.querySelector('.burger');
    const  nav = document.querySelector('.nav-links');
    //toggle nav
    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
    //burger animation
     burger.classList.toggle('toggle');
    });
  
}

navSlide();
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
   
    if (dropdownContent.style.display == "flex") {
      dropdownContent.style.display = "none";
  
    } else {
        dropdownContent.style.display = "flex";
       
    }
  });
}
var dropdown = document.getElementsByClassName("dropdown-btn2");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active3");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display == "flex") {
      dropdownContent.style.display = "none";
  
    } else {
        dropdownContent.style.display = "flex";
       
    }
  });
}

$('#right-arrow').click(function(){
  var currentSlide = $('.slide.active2');
  var nextSlide = currentSlide.next();

  currentSlide.fadeOut(300).removeClass('active2');
  nextSlide.fadeIn(300).addClass('active2');
  if(nextSlide.length == 0){
    $('.slide').first().fadeIn(300).addClass('active2');
  }
});
$('#left-arrow').click(function(){
 var currentSlide = $('.slide.active2');
 var prevSlide = currentSlide.prev();
  currentSlide.fadeOut(300).removeClass('active2');
  prevSlide.fadeIn(300).addClass('active2');
    if(prevSlide.length == 0){
      $('.slide').last().fadeIn(300).addClass('active2');
    }
});

const slideChange = (n) =>{
    console.log("came here");
    showSlides(slideIndex += n);
  }
const currentSlide = (n) =>{
    showSlides(slideIndex = n);
}

const showSlides = (n)=>{
 let i;
 let slides = document.getElementsByClassName("display-image");
 let dots = document.getElementsByClassName("slides");

 if( n > slides.length){
     slideIndex = 1;
 }
 if(n < 1){
     slideIndex = slides.length;
 }
 for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "flex";

dots[slideIndex-1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);
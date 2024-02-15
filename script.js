
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    })
})

let page3Heading1 = document.querySelector("#heading1");
let page3Heading2 = document.querySelector("#heading2");
let page3Heading3 = document.querySelector("#heading3");
let page3Content1 = document.querySelector("#paragraph1");
let page3Content2 = document.querySelector("#paragraph2");
let page3Content3 = document.querySelector("#paragraph3");
let page3Img1 = document.querySelector("#designimg");
let page3Img2 = document.querySelector("#projectimg");
let page3Img3 = document.querySelector("#executionimg");

page3Heading1.addEventListener("click", function(){
    page3Heading1.style.opacity = 1;
    page3Heading2.style.opacity = 0.6;
    page3Heading3.style.opacity = 0.6;
    page3Content1.style.display = "block";
    page3Content2.style.display = "none";
    page3Content3.style.display = "none";
    page3Img1.style.display = "block";
    page3Img2.style.display = "none";
    page3Img3.style.display = "none";
   
})

page3Heading2.addEventListener("click", function(){
    page3Heading2.style.opacity = 1;
    page3Heading1.style.opacity = 0.6;
    page3Heading3.style.opacity = 0.6;
    page3Content2.style.display = "block";
    page3Content1.style.display = "none";
    page3Content3.style.display = "none";
    page3Img2.style.display = "block";
    page3Img1.style.display = "none";
    page3Img3.style.display = "none";
})

page3Heading3.addEventListener("click", function(){
    page3Heading3.style.opacity = 1.6;
    page3Heading2.style.opacity = 0.6;
    page3Heading1.style.opacity = 0.6;
    page3Content3.style.display = "block";
    page3Content2.style.display = "none";
    page3Content1.style.display = "none";
    page3Img3.style.display = "block";
    page3Img1.style.display = "none";
    page3Img2.style.display = "none";
    
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

swiperAnimation();

function customCursor(){
    var customCursor = document.querySelector("#custom-cursor");
var swiperWrapper = document.querySelector(".swiper-wrapper");
swiperWrapper.addEventListener("mousemove", function(event){
    gsap.to(customCursor, {
        x: event.x,
        y: event.y
    })
})

swiperWrapper.addEventListener("mouseenter", function(){
    gsap.to(customCursor, {
        scale: 1,
        opacity:1
    })
})

swiperWrapper.addEventListener("mouseleave", function(){
    gsap.to(customCursor, {
        scale: 0,
        opacity:0
    })
})
}

customCursor();

function loaderAnimation(){
    var loader = document.querySelector("#loader");
    setTimeout(function(){
        loader.style.top = "-100%"
    }, 4000)
}

loaderAnimation();


// Sticky navbar
window.addEventListener('scroll', function(){
const header = document.querySelector('.header');
header.classList.toggle("sticky", window.scrollY > 0);
});

// hamburger menu
const icon = document.querySelector('.menuIcon');
const menu = document.querySelector('.header-right');
const link = document.querySelector('.link');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
const link5 = document.querySelector('.link5');
icon.addEventListener('click', function() {
    menu.classList.toggle('active');
});
link.addEventListener('click', function() {
    menu.classList.remove('active');
});
link2.addEventListener('click', function() {
    menu.classList.remove('active');
});
link3.addEventListener('click', function() {
    menu.classList.remove('active');
});
link4.addEventListener('click', function() {
    menu.classList.remove('active');
});
link5.addEventListener('click', function() {
    menu.classList.remove('active');
});


// Scroll text animation
window.addEventListener('scroll', function() {
    let content = document.querySelector('.txt');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /2;
    if(contentPosition < screenPosition){
        content.classList.add('show');
    } else {
        content.classList.remove('show');
    }
});


// scroll trigger
const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 10%"
    });
});

const showHl = gsap.utils.toArray('.show-hl');
showHl.forEach((text) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 10%",
    });
});




// photo moda; images
const modal = document.querySelector('#myModal');
const img = document.querySelector('#myImg');
const img2 = document.querySelector('#myImg2');
const img3 = document.querySelector('#myImg3');
const modalImg = document.querySelector('#img01');
const captionText = document.querySelector('#caption')

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName('close')[0];
span.onclick = function(){
    modal.style.display = "none";
};
var typed = new Typed('#text',{
    strings:['Developer.','Designer.','Dancer.'],
    typeSpeed:60,
    backSpeed:60,
    loop:true,
});

// SHOW SKILLS

let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click',() =>{
    skillDet.classList.toggle('show_skills');
});

// STICKY NAVBAR

let nav = document.querySelector('nav');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 100){
        nav.classList.add('sticky_nav');
    }
    else{
        nav.classList.remove('sticky_nav');
    }
});

//PROJECT SWIPER

var swiper = new Swiper('.projectSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const prevButton = document.querySelector('.pre-btn'); 
const nextButton = document.querySelector('.nxt-btn'); 

prevButton.addEventListener('click', () => {
    swiper.slidePrev(); 
});

nextButton.addEventListener('click', () => {
    swiper.slideNext(); 
});


// Show nav

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show_nav');
});
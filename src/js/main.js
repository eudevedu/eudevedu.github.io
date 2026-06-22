$(document).ready(function () {
  // scroll menu navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.nav-bar').addClass('sticky');
    } else {
      $('.nav-bar').removeClass('sticky');
    }
  });

  // toggle menu/nav-bar
  $('.menu-btn').click(function () {
    $('.nav-bar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // Cursor Glow
  const cursorGlow = document.querySelector('.cursor-glow');
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.display = 'block';
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });

  // typing animation
  var typed = new Typed('.typing', {
    strings: [
      'Desenvolvedor Web Front-End',
      'Apaixonado por Códigos',
      'Gamer',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  }); 

  // owl carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },

      600: {
        items: 2,
        nav: false,
      },

      1000: {
        items: 2,
        nav: false,
      },
    },
  });

  // Initialize Tilt
  VanillaTilt.init(document.querySelectorAll(".project-card, .services .card, .image-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
});


//PORTFOLIO SWIPER
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


// SHOW SCROLL UP
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 1000) 
      scrollUp.classList.add('show-scroll')
  else
    scrollUp.classList.remove('show-scroll')
}
 
window.addEventListener('scroll', scrollUp);



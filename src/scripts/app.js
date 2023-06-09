'user strict';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// menu burger

const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

if (menuBurger != undefined && menuBurger != null){

  menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
});
}

// Active nav

let navTriggers = document.querySelectorAll(".menu__el");
for (let navTrigger of navTriggers) {
  navTrigger.addEventListener("click", (event) => {
    let activeClass = document.querySelector(".menu__el--active");
    if (activeClass) {
      activeClass.classList.remove("menu__el--active");
    }
    event.currentTarget.classList.add("menu__el--active");
  });
}

// Active nav scroll

if (menuBurger != undefined && menuBurger != null){
  let section = document.querySelectorAll('.section');
  const navTriggers = document.querySelectorAll(".menu__el");
  function activeLink(li){
    navTriggers.forEach((item) => item.classList.remove('menu__el--active'));
    li.classList.add('menu__el--active');
  };
  navTriggers.forEach((item) =>
  item.addEventListener('click', function(){
    activeLink(this);
  }));
  window.onscroll = () => {
    section.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height){
        const target = document.querySelector(`[href='#${id}']`).parentElement;
        activeLink(target);
      };
    });
  };
};

// Affichage legende

const btn_legende = document.querySelector("#btn_legende");
if(btn_legende != undefined && btn_legende != null){
	btn_legende.addEventListener("click", (e) =>{
		const legende = document.querySelector("#legende");
		legende.classList.toggle("hidden");
	});
}

// Animation gsap

const Animation = document.querySelectorAll('.test-bar, .border-grid');

Animation.forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    x: 100,
    duration: 12,
    scrollTrigger: {
      trigger: element,
      start: 'top 100%',
      end: 'bottom 100%',
      scrub: true
    }
  });   
});

  



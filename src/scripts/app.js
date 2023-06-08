'user strict';

const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
});


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

// AFFICHAGE LEGENDE
const btn_legende = document.querySelector("#btn_legende");
if(btn_legende != undefined && btn_legende != null){
	btn_legende.addEventListener("click", (e) =>{
		const legende = document.querySelector("#legende");
		legende.classList.toggle("hidden");
	});
}

  



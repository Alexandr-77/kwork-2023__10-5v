
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
  if (window.innerWidth < 990 ) {
    liHeader[i].addEventListener('click', rotateBurger);
	}
}

function rotateBurger() {
  burger.classList.toggle('burger-active');
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  
}

// burger.addEventListener('click', () => {
  // 	header.classList.toggle('header__active');
  // });

// ===========================================
let bodyActive = document.querySelector('.body');
  
burger.addEventListener('click', () => {
	bodyActive.classList.toggle('body--active');
});

// document.querySelector('burger').onclick = function() {
//   document.querySelector('.body').classList.toggle('body--active');
// }

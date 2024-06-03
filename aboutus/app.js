// Бургерное меню
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'none' ? 'block' : 'none';
});

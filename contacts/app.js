// Бургерное меню
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'none' ? 'block' : 'none';
});

// Форма обратной связи
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Здесь можно добавить логику для отправки данных формы обратной связи
  alert('Сообщение отправлено!');
  feedbackForm.reset();
});

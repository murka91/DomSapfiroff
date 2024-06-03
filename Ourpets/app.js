// Бургерное меню
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'none' ? 'block' : 'none';
});

// Получаем контейнер для карточек кошек
const catContainer = document.querySelector('.cat-container');

// Массив с данными о кошках
const cats = [
  { name: 'Персик', age: { years: 1, months: 3 }, gender: 'female', image: 'image 6.png' },
  { name: 'Мурзик', age: { years: 4, months: 6 }, gender: 'male', image: 'image 7.png' },
  { name: 'Василиса', age: { years: 9, months: 2 }, gender: 'female', image: 'image 8.png' },
  { name: 'Пушок', age: { years: 0, months: 8 }, gender: 'male', image: 'image 9.png' },
  { name: 'Барсик', age: { years: 3, months: 11 }, gender: 'male', image: 'image 10.png' },
  { name: 'Дымка', age: { years: 7, months: 5 }, gender: 'female', image: 'image 11.png' }
];

// Функция для отображения карточек кошек
function displayCats(filteredCats) {
  catContainer.innerHTML = '';
  filteredCats.forEach(cat => {
    const catCard = document.createElement('div');
    catCard.classList.add('cat-card');
    catCard.innerHTML = `
      <img src="${cat.image}" alt="${cat.name}">
      <h3>${cat.name}</h3>
      <p>Возраст: ${cat.age.years} ${cat.age.years === 1 ? 'год' : 'лет'} ${cat.age.months} ${cat.age.months === 1 ? 'месяц' : 'месяцев'}</p>
      <p>Пол: ${cat.gender === 'male' ? 'Кот' : 'Кошка'}</p>
      <button class="book-btn">Забронировать</button>
    `;
    catContainer.appendChild(catCard);

    // Добавляем обработчик события на кнопку "Забронировать"
    const bookBtn = catCard.querySelector('.book-btn');
    bookBtn.addEventListener('click', () => {
      openModal(cat.name);
    });
  });
}

// Функция для фильтрации кошек по возрасту и полу
function filterCatsByAgeAndGender(ageFilter, genderFilter) {
  let filteredCats = cats;

  // Фильтрация по возрасту
  if (ageFilter !== 'all') {
    if (ageFilter === 'kitten') {
      filteredCats = filteredCats.filter(cat => cat.age.years === 0 && cat.age.months < 12);
    } else if (ageFilter === 'adult') {
      filteredCats = filteredCats.filter(cat => cat.age.years >= 1 && cat.age.years < 8);
    } else if (ageFilter === 'senior') {
      filteredCats = filteredCats.filter(cat => cat.age.years >= 8);
    }
  }

  // Фильтрация по полу
  if (genderFilter !== 'all') {
    filteredCats = filteredCats.filter(cat => cat.gender === genderFilter);
  }

  return filteredCats;
}

// Добавляем обработчик события на кнопку фильтрации
const filterBtn = document.getElementById('filter-btn');
const ageFilterSelect = document.getElementById('age-filter');
const genderFilterSelect = document.getElementById('gender-filter');

filterBtn.addEventListener('click', () => {
  const ageFilter = ageFilterSelect.value;
  const genderFilter = genderFilterSelect.value;
  const filteredCats = filterCatsByAgeAndGender(ageFilter, genderFilter);
  displayCats(filteredCats);
});

// Получаем модальное окно, кнопку закрытия и форму
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const bookForm = document.querySelector('#book-form');

// Функция для открытия модального окна
function openModal(catName) {
  document.getElementById('cat-name').value = catName;
  modal.style.display = 'block';
}

// Обработчик для кнопки закрытия
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Обработчик для формы бронирования
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Обработка формы бронирования
  modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Отображаем всех кошек при загрузке страницы
displayCats(cats);

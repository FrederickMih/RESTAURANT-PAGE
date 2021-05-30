const displayMenu = () => {
  const menu = document.createElement('main');
  const homeNote = document.createElement('h4');
  const homeImg = document.createElement('img');

  const meals = document.createElement('div');
  const meal1 = document.createElement('a');
  const meal2 = document.createElement('a');
  const meal3 = document.createElement('a');
  const meal4 = document.createElement('a');
  const meal5 = document.createElement('a');

  const imgMeal1 = document.createElement('img');
  const imgMeal2 = document.createElement('img');
  const imgMeal3 = document.createElement('img');
  const imgMeal4 = document.createElement('img');
  const imgMeal5 = document.createElement('img');

  const parMeal1 = document.createElement('p');
  const parMeal2 = document.createElement('p');
  const parMeal3 = document.createElement('p');
  const parMeal4 = document.createElement('p');
  const parMeal5 = document.createElement('p');

  meals.setAttribute('class', 'meals');
  meal1.setAttribute('class', 'meal');
  meal1.setAttribute('href', '#');
  meal2.setAttribute('class', 'meal');
  meal2.setAttribute('href', '#');
  meal3.setAttribute('class', 'meal');
  meal3.setAttribute('href', '#');
  meal4.setAttribute('class', 'meal');
  meal4.setAttribute('href', '#');
  meal5.setAttribute('class', 'meal');
  meal5.setAttribute('href', '#');

  imgMeal1.setAttribute('class', 'img-meal');
  imgMeal1.setAttribute('src', '../assets/images/Ekwang.jpg');
  imgMeal2.setAttribute('class', 'img-meal');
  imgMeal2.setAttribute('src', '../assets/images/yellow-soup.jpg');
  imgMeal3.setAttribute('class', 'img-meal');
  imgMeal3.setAttribute('src', '../assets/images/Egusi-Pudding-Recipe.jpg');
  imgMeal4.setAttribute('class', 'img-meal');
  imgMeal4.setAttribute('src', '../assets/images/eru.jpg');
  imgMeal5.setAttribute('class', 'img-meal');
  imgMeal5.setAttribute('src', '../assets/images/eru.jpg');

  parMeal1.setAttribute('class', 'par-meal');
  parMeal1.innerText = 'Dish One(Ekwang)';
  parMeal2.setAttribute('class', 'par-meal');
  parMeal2.innerText = 'Dish Two(Yellow Soup)';
  parMeal3.setAttribute('class', 'par-meal');
  parMeal3.innerText = 'Dish Three (Egusi Pudding)';
  parMeal4.setAttribute('class', 'par-meal');
  parMeal4.innerText = 'Dish Four';
  parMeal5.setAttribute('class', 'par-meal');
  parMeal5.innerText = 'Dish Five';

  homeNote.innerText = 'Find The True Taste Here!';

  menu.setAttribute('class', 'menu, main');
  menu.setAttribute('id', 'myMenu');
  homeNote.setAttribute('class', 'main-quote');
  homeImg.setAttribute('class', 'main-menu-img');
  homeImg.setAttribute('src', '../assets/images/eru.jpg');

  menu.style.display = 'none';

  menu.appendChild(homeImg);
  menu.appendChild(homeNote);
  menu.appendChild(meals);
  meals.appendChild(meal1);
  meals.appendChild(meal2);
  meals.appendChild(meal3);
  meal1.appendChild(imgMeal1);
  meal1.appendChild(parMeal1);
  meal2.appendChild(imgMeal2);
  meal2.appendChild(parMeal2);
  meal3.appendChild(imgMeal3);
  meal3.appendChild(parMeal3);
  meal4.appendChild(imgMeal4);
  meal4.appendChild(parMeal4);
  meal5.appendChild(imgMeal5);
  meal5.appendChild(parMeal5);

  return menu;
};

export default displayMenu;

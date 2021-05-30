const displayHome = () => {
  const home = document.createElement('main');
  const homeTitle = document.createElement('h2');
  const homeNote = document.createElement('h5');
  const homeImg = document.createElement('img');
  const homeImg1 = document.createElement('img');
  const homeImg2 = document.createElement('img');

  homeTitle.innerText = 'A Taste of Africa - Recipes';
  homeNote.innerText = 'Words are sweet but they can never replace food!';

  home.setAttribute('class', 'main');
  home.setAttribute('id', 'homePage');
  homeTitle.setAttribute('class', 'home-title');
  homeNote.setAttribute('class', 'home-note');
  homeImg.setAttribute('class', 'home-img');

  homeImg.setAttribute('src', 'assets/images/lauch.jpg');

  home.appendChild(homeTitle);
  home.appendChild(homeNote);
  home.appendChild(homeImg);
  home.appendChild(homeImg1);
  home.appendChild(homeImg2);

  return home;
};

export default displayHome;

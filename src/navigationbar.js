const navigationBar = () => {
  const navBar = document.createElement('nav');
  const navHeader = document.createElement('h1');
  const navUlist = document.createElement('ul');
  const homeLi = document.createElement('li');
  const menuLi = document.createElement('li');
  const contactLi = document.createElement('li');
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  homeLink.innerText = 'Home';
  menuLink.innerText = 'Menu';
  contactLink.innerText = 'Contact';

  navBar.setAttribute('class', 'nav-bar');
  navHeader.setAttribute('class', 'rest-header');
  navUlist.setAttribute('class', 'menu-list');
  homeLi.setAttribute('class', 'menu-item');
  menuLi.setAttribute('class', 'menu-item');
  contactLi.setAttribute('class', 'menu-item');
  homeLink.setAttribute('class', 'menu-link');
  menuLink.setAttribute('class', 'menu-link');
  contactLink.setAttribute('class', 'menu-link');

  homeLink.setAttribute('id', 'home-link');
  menuLink.setAttribute('id', 'menu-link');
  contactLink.setAttribute('id', 'contact-link');

  homeLink.setAttribute('href', '#');
  menuLink.setAttribute('href', '#');
  contactLink.setAttribute('href', '#');

  navBar.appendChild(navHeader);
  navBar.appendChild(navUlist);
  navUlist.appendChild(homeLi);
  navUlist.appendChild(menuLi);
  navUlist.appendChild(contactLi);
  homeLi.appendChild(homeLink);
  menuLi.appendChild(menuLink);
  contactLi.appendChild(contactLink);

  return navBar;
};

export default navigationBar;
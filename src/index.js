import navigationBar from './navigationbar';
import displayHome from './home';
import displayMenu from './menus';
import displayContent from './content';
import contactUs from './contact_us';
import myFooter from './footer';

const run = () => {
  const content = document.getElementById('content');
  content.appendChild(navigationBar());
  content.appendChild(displayHome());
  content.appendChild(displayMenu());
  content.appendChild(contactUs());

  content.appendChild(myFooter());

  document.getElementById('home-link').onclick = () => {
    displayContent('homePage');
  };
  document.getElementById('menu-link').onclick = () => {
    displayContent('myMenu');
  };
  document.getElementById('contact-link').onclick = () => {
    displayContent('myContacts');
  };
};

run();

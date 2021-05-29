import navigationBar from "./navigationbar.js"
import displayHome from "./home.js";
import displayMenu from "./menus.js";
import contactUs from "./contact_us.js"
import displayContent from "./content.js"
import myFooter from "./footer.js";


const run = () => {
  const content = document.getElementById("content");
  content.appendChild(navigationBar());
  content.appendChild(displayHome());
  content.appendChild(displayMenu());
  content.appendChild(contactUs());

  content.appendChild(myFooter());
  

  document.getElementById("home-link").onclick = () => {
    displayContent("homePage");
  };
  document.getElementById("menu-link").onclick = () => {
    displayContent("myMenu");
  };
  document.getElementById("contact-link").onclick = () => {
    displayContent("myContacts");
  };
 
  
};

run();

const displayHome = () => {
  const home = document.createElement("section");
  const homeTitle = document.createElement("h2");
  const homeNote = document.createElement("h5");
  const homeImg = document.createElement("img");

  homeTitle.innerText = "A Taste of Africa - Recipes";
  homeNote.innerText = "Words are sweet but they can never replace food!"

  home.setAttribute("class", "section");
  home.setAttribute("id", "homePage");
  homeTitle.setAttribute("class", "home-title");
  homeNote.setAttribute("class", "home-note");
  homeImg.setAttribute("class", "home-img");
  homeImg.setAttribute("src", "../assets/images/yellow-soup.jpg");

  home.appendChild(homeTitle);
  home.appendChild(homeNote);
  home.appendChild(homeImg);

  return home;
};

export default displayHome;

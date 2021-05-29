const reachUs = () => {
  const contactUs = document.createElement("Section");
  const homeTitle = document.createElement("h3");
  const homeNote = document.createElement("h4");
  const frame = document.createElement("iframe");

  homeTitle.innerText = "Find Us";
  homeNote.innerText = "Tel: +237679260797\n\n Email: fredtimermih@gmail.com";

  contactUs.setAttribute("class", "section");
  contactUs.setAttribute("id", "myContacts");
  homeTitle.setAttribute("class", "main-title");
  homeNote.setAttribute("class", "main-quote");
  frame.setAttribute("class", "frame");
  frame.setAttribute(
    "src",
    "https://www.google.com/maps/dir/4.953614,9.9353326/Restaurant+Chez+Ren%C3%A9,+Douala/@4.5008432,9.4682495,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x10610d778feb2509:0xb13dfde2a7bf0ea2!2m2!1d9.7350397!2d4.0496465"
  );

contactUs.style.display = "none";

  contactUs.appendChild(homeTitle);
  contactUs.appendChild(homeNote);
  contactUs.appendChild(frame);

  return contactUs;
};

export default reachUs;

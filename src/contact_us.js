const reachUs = () => {
  const contactUs = document.createElement('main');
  const homeTitle = document.createElement('h3');
  const homeNote = document.createElement('h4');
  const frame = document.createElement('iframe');

  homeTitle.innerText = 'Find Us';
  homeNote.innerText = 'Tel: +237679260797\n\n Email: fredtimermih@gmail.com';

  contactUs.setAttribute('class', 'main');
  contactUs.setAttribute('id', 'myContacts');
  homeTitle.setAttribute('class', 'main-title');
  homeNote.setAttribute('class', 'main-quote');
  frame.setAttribute('class', 'frame');

  contactUs.style.display = 'none';

  contactUs.appendChild(homeTitle);
  contactUs.appendChild(homeNote);
  contactUs.appendChild(frame);

  return contactUs;
};

export default reachUs;

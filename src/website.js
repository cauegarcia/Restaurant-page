import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js'

const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.src = "./images/logo.png";

  const nav = document.createElement('nav');
  nav.classList.add('nav-header');

  const buttons = ['home', 'menu', 'contact'];
  buttons.forEach(value => {
    let button = document.createElement('button');
    button.innerText = value.charAt(0).toUpperCase() + value.slice(1);
    button.setAttribute('id', value);
    nav.appendChild(button);
  })
  header.appendChild(logo);
  header.appendChild(nav);
  return header;
}

const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  return main;
}

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const socialMediaDiv = document.createElement('div');
  socialMediaDiv.classList.add('social-media');
  socialMediaDiv.innerHTML = `<a href="www.facebook.com"><i class="fab fa-facebook"></i>Facebook</a>
  <a href="www.instagram.com"><i class="fab fa-instagram"></i>Instagram</a>`;

  const openHoursDiv = document.createElement('div');
  const openHoursContent = document.createElement('h4');
  openHoursContent.innerHTML = `OPENING HOURS<br>
  Tuesday to Sunday<br>2:00PM - 23:00PM`;
  openHoursDiv.appendChild(openHoursContent);

  const contactDiv = document.createElement('div');
  const contactContent = document.createElement('h4');
  contactContent.innerHTML = `CONTACT<br>
  <i class="fas fa-phone"></i>(857)386-9900`;
  contactDiv.appendChild(contactContent);

  const addressDiv = document.createElement('div');
  const addressContent = document.createElement('h4');
  addressContent.innerHTML = `ADDRESS<br>
  200 Shirley Ave<br>Revere, MA-02151`;
  addressDiv.appendChild(addressContent);
 
  footer.appendChild(socialMediaDiv);
  footer.appendChild(openHoursDiv);
  footer.appendChild(contactDiv);
  footer.appendChild(addressDiv);

  return footer;
}

const setActiveButton = () => {
  const headerButtons = document.querySelector('.header').querySelectorAll('button');
  headerButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.classList.remove('active');
    }
  })
  const page = document.querySelector('#content').querySelector('div');
  headerButtons.forEach(button => {
    if (button.id == page.classList[0]) {
      button.classList.add('active');
    }
  })
};

const setButtonHandlers = () => {
  const buttons = document.querySelector('.header').querySelectorAll('button');
  buttons.forEach(button => {
    if (button.id == 'home')
    {button.addEventListener('click', (e) => {
      loadHome();
      setActiveButton();
    })};
    if (button.id == 'menu')
    {button.addEventListener('click', (e) => {
      loadMenu();
      setActiveButton();
    })};
    if (button.id == 'contact')
    {button.addEventListener('click', (e) => {
      loadContact();
      setActiveButton();
    })};  
  })
}

const displayWebsite = () => {
  let container = document.querySelector('#content');
  
  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());


  // loadHome();
  loadContact();
  setActiveButton();
  setButtonHandlers();
  
};

export default displayWebsite;
import loadMenu from './menu.js';

const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const name = document.createElement('h1');
  name.classList.add('restaurant-name');
  name.innerText = 'Fresco';

  const specialties = document.createElement('h2');
  specialties.classList.add('specialties');
  specialties.innerText = 'Italian Specialties';

  const tags = document.createElement('h3');
  tags.classList.add('tags');
  tags.innerText = 'Quality | Fair prices';

  const button = document.createElement('button');
  button.addEventListener('click', (e) => {
    loadMenu();
    const headerButtons = document.querySelector('.header').querySelectorAll('button');
    headerButtons.forEach(button => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
    let menuButton = document.querySelector('.header').querySelector('#menu');
    menuButton.classList.add('active');
  });
  button.innerText = 'Check our Menu';

  home.appendChild(name);
  home.appendChild(specialties);
  home.appendChild(tags);
  home.appendChild(button);

  return home;
};

const loadHome = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(createHome());
}
export default loadHome;

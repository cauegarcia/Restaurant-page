const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const name = document.createElement('h1');
  name.innerText = 'Menu';

  menu.appendChild(name);
  menu.appendChild(createItem());

  return menu;
}

const createItem = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const items = [{
    name: 'Pizza Margherita',
    image: `./images/pizza-margherita.jpg`,
    description: 'Praesent sed maximus magna. Aenean massa eros, amet efficitur enim. Sed.',
    price: '21'
  },{
    name: 'Gamberi alla Busara',
    image: './images/gamberi-alla-busara.jpg',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    price: '20'
  },{
    name: 'Diavolo with Linguine',
    image: './images/diavolo-with-linguine.jpg',
    description: 'Nam feugiat, libero vitae euismod ultrices, quam sapien suscipit ',
    price: '18'
  },{
    name: 'Carbonara',
    image: './images/pasta-carbonara.jpg',
    description: 'Donec dictum, massa vitae molestie aliquet, augue orci ',
    price: '17'
  },{
    name: 'Sarde in Saor',
    image: './images/sarde-in-saor.jpg',
    description: 'Praesent sed maximus magna. Aenean massa eros, varius ut rutrum et',
    price: '22'
  },
  {
    name: 'Spagheti al Nero di Seppia',
    image: './images/spaghetti-al-nero-di-seppia.jpg',
    description: 'Cras quis maximus turpis, eget faucibus metus. Nulla orci ipsum',
    price: '22'
  }];

  items.forEach(item => {
    let div = document.createElement('div');
    div.classList.add('item-div');

    let foodImage = document.createElement('img');
    foodImage.classList.add('item-image');
    foodImage.src = item.image;

    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('div-description');

    let itemName = document.createElement('h3');
    itemName.innerText = item.name;

    let itemDescription = document.createElement('p');
    itemDescription.innerText = item.description;

    descriptionDiv.appendChild(itemName);
    descriptionDiv.appendChild(itemDescription);

    let itemPrice = document.createElement('div');
    itemPrice.classList.add('price');
    itemPrice.textContent = item.price;

    div.appendChild(foodImage);
    div.appendChild(descriptionDiv);
    div.appendChild(itemPrice);

    menuContainer.appendChild(div);
  })

  return menuContainer;
  
};

const loadMenu = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(createMenu());
}

export default loadMenu;
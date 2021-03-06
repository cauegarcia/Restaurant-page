const createContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  
  const name = document.createElement('h1');
  name.innerText = 'Contact';

  contact.appendChild(name);
  contact.appendChild(createFormMap())

  return contact;
};

const createFormMap = () => {
  const div = document.createElement('div');
  div.classList.add('contact-div');

  const formDiv = document.createElement('div');
  formDiv.classList.add('form-div');

  formDiv.appendChild(createForm());

  const mapDiv = document.createElement('div');
  mapDiv.classList.add('map-div');
  let mapHeight = '100%';
  let mapWidth = '100%';
  mapDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.945570389527!2d-70.9948819850377!3d42.4076040400913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36e1acc2963bf%3A0x7e972d74b2964a92!2s200%20Shirley%20Ave%2C%20Revere%2C%20MA%2002151%2C%20EUA!5e0!3m2!1sen-US!2sbr!4v1615042263018!5m2!1sen-US!2sbr" width="${mapWidth}" height="${mapHeight}" style="border:0;" allowfullscreen="" loading="fast"></iframe>`;

  div.appendChild(formDiv);
  div.appendChild(mapDiv);
  
  return div;
}
const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('form');

  const labels = ['Name','E-mail','Phone'];
  labels.forEach(value => {
    const input = document.createElement('input');
    input.classList.add('input');
    if (value == 'Phone') {
      input.setAttribute('type', 'tel');
      input.setAttribute('pattern', '([0-9]{3})[0-9]{3}-[0-9]{3}');
    } else {
      input.setAttribute('type', 'text');    }
    input.setAttribute('id', value.toLowerCase());
    input.setAttribute('placeholder', '');

    const label = document.createElement('label');
    label.classList.add('label');
    label.innerText = value;
    label.setAttribute('for', value.toLowerCase());

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement('br'));
  })

  const message = document.createElement('textarea');
  message.classList.add('text-area');
  message.setAttribute('name','message');
  message.setAttribute('id','message');
  message.setAttribute('cols','40');
  message.setAttribute('rows','6');

  const labelMsg = document.createElement('label');
  labelMsg.classList.add('label');
  labelMsg.innerText = 'Message:'
  labelMsg.setAttribute('for', 'message');

  form.appendChild(labelMsg);
  form.appendChild(message);

  const button = document.createElement('button');
  button.innerText = 'Send'
  button.classList.add('button')

  form.appendChild(button);

  return form;
}


const loadContact = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.appendChild(createContact());
}

export default loadContact;
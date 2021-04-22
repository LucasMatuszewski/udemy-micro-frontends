import faker from 'faker';

const cartText = `<div>You have ${faker.datatype.number()} items in you cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;

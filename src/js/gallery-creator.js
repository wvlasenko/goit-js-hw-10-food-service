import itemTemplate from '../templates/gallery-items.hbs';
import mealMenu from '../menu.json';


const menuRef = document.querySelector('ul.js-menu');
const markup = itemTemplate(mealMenu);

menuRef.insertAdjacentHTML('beforeend' ,markup);
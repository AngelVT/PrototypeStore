const menu = document.querySelector('#menu_mobile');
const navelements = document.querySelector('#navelements');
const navsearch = document.querySelector('#navsearch');
const menuSearch = document.querySelector('.navbar_searchbar_container');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  navsearch.classList.toggle('activated');
  navelements.classList.toggle('activated');
  menuSearch.classList.toggle('active');
  menuLinks.classList.toggle('active');
});
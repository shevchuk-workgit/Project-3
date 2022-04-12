'use strict'

const header = document.querySelector('header');
const main = document.querySelector('.main_container');
const footer = document.querySelector('footer');

function createStructurePage(){

  const header_light = document.createElement('div');
  header_light.classList.add('temporary-light','header_container');
  header.prepend(header_light);

  const footer_light = document.createElement('div');
  footer_light.classList.add('temporary-light','footer_container');
  footer.prepend(footer_light);
  
  const main_nav = document.createElement('nav');
  main_nav.classList.add('nav_container', 'temporary-light');
  main.prepend(main_nav);

  const main_article = document.createElement('article');
  main_article.classList.add('article_container', 'temporary-light');
  main.append(main_article);
}

function changeStructurePage(currentSlide){
  main.classList.add(`main_container_variant-1`);

  switch(currentSlide){
    case 1:
      main.classList.remove('main_container_variant-2','main_container_variant-3');
      main.classList.add(`main_container_variant-${currentSlide}`);
      break;
    case 2:
      main.classList.remove('main_container_variant-1','main_container_variant-3');
      main.classList.add(`main_container_variant-${currentSlide}`);
      break;
    case 3:
      main.classList.remove('main_container_variant-1','main_container_variant-2');
      main.classList.add(`main_container_variant-${currentSlide}`);
      break;
  }


}
  

  





export {createStructurePage,changeStructurePage};
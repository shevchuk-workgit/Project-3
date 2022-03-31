'use strict'

const header = document.querySelector('.header_container');
const main = document.querySelector('.main_container');
const footer = document.querySelector('.footer_container');

function createStructurePage(){

  const header_light = document.createElement('div')
  header_light.classList.add('temporary-light')
  header.prepend(header_light);

  const footer_light = document.createElement('div')
  footer_light.classList.add('temporary-light')
  footer.prepend(footer_light);
  
  const main_nav = document.createElement('nav')
  main_nav.classList.add('nav_container', 'temporary-light')
  main.prepend(main_nav);

  const main_article = document.createElement('article')
  main_article.classList.add('article_container', 'temporary-light')
  main.append(main_article);
}

function changeStructurePage(currentSlide){
  main.classList.add(`main_container_variant-1`);

  switch(currentSlide){
    case 1:
      main.classList.remove('main_container_variant-2','main_container_variant-3')
      main.classList.add(`main_container_variant-${currentSlide}`)
      break;
    case 2:
      main.classList.remove('main_container_variant-1','main_container_variant-3')
      main.classList.add(`main_container_variant-${currentSlide}`)
      break;
    case 3:
      main.classList.remove('main_container_variant-1','main_container_variant-2')
      main.classList.add(`main_container_variant-${currentSlide}`)
      break;
  }

  




  // main.attributes.removeNamedItem
  // main.classList.add(`main_container_variant-${currentSlide}`)

  // switch(variant){
  //   case 1:

  //     break;
}
  

  











  // if (variant===1){

  //   main.classList.remove('main_container_variant-2','main_container_variant-3')
  //   main.classList.add('main_container_variant-1')

  // } else if(variant===2) {
  //   const header_light = document.createElement('div')
  //   header_light.classList.add('temporary-light')
  //   header.prepend(header_light);

  //   const footer_light = document.createElement('div')
  //   footer_light.classList.add('temporary-light')
  //   footer.prepend(footer_light);

  //   main.classList.add('main_container_variant-2')

  //   const main_nav = document.createElement('nav')
  //   main_nav.classList.add('nav_container', 'temporary-light')
  //   main.prepend(main_nav);

  //   const main_article = document.createElement('article')
  //   main_article.classList.add('article_container', 'temporary-light')
  //   main.append(main_article);
  // } else if(variant===3) {
  //   const header_light = document.createElement('div')
  //   header_light.classList.add('temporary-light')
  //   header.prepend(header_light);

  //   const footer_light = document.createElement('div')
  //   footer_light.classList.add('temporary-light')
  //   footer.prepend(footer_light);

  //   main.classList.add('main_container_variant-3')

  //   const main_nav = document.createElement('nav')
  //   main_nav.classList.add('nav_container', 'temporary-light')
  //   main.prepend(main_nav);

  //   const main_article = document.createElement('article')
  //   main_article.classList.add('article_container', 'temporary-light')
  //   main.append(main_article);

  



  



export {createStructurePage,changeStructurePage};
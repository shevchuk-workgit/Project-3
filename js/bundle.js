/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeBackground": () => (/* binding */ changeBackground),
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _window_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window_contents */ "./js/modules/window_contents.js");
/* harmony import */ var _structure_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure_page */ "./js/modules/structure_page.js");



;


//slider
let currentSlide;
let sliderImage;

function slider(currentWindow, quantitySlider){
  let sliderTimer = true;
  let nextSlide = currentSlide+1;
  let prevSlide = currentSlide-1;
  let firstSliderImage;
  let lastSliderImage;

  currentSlide = 1;

  //NEXT slide
  document.querySelector('.arrow-next').addEventListener('click',()=>{
    
    if (sliderTimer){

      if (currentSlide < quantitySlider){
        currentSlide++
        nextSlide=currentSlide+1
        if(nextSlide > quantitySlider){
          nextSlide = 1
        };     
      } else {
        currentSlide=1
        nextSlide=currentSlide+1
      };

      switch(currentWindow){
        case 1: 
        changeSlideBackground(nextSlide);
        changeBackground();
        break;
        case 2: 
        changeSlidePageStyle(nextSlide);
        (0,_structure_page__WEBPACK_IMPORTED_MODULE_1__.changeStructurePage)(currentSlide);
        break;
      }
      
      firstSliderImage = document.querySelector('.slider_image:first-child');  
      firstSliderImage.remove();

      document.querySelector('.slider_images_container').append(sliderImage);

      console.log(`currentSlide ${currentSlide}`);

      

      sliderTimer = false;
      setTimeout(()=>sliderTimer=true,500);
    };
  });

  //PREV slide
  document.querySelector('.arrow-prev').addEventListener('click',()=>{

    if (sliderTimer){

      if (currentSlide > 1){
        currentSlide--
        prevSlide=currentSlide-1
        if(prevSlide < 1 ){
          prevSlide = quantitySlider
        }
      } else {
        currentSlide=quantitySlider
        prevSlide = currentSlide-1
      }

      switch(currentWindow){
        case 1:
          changeSlideBackground(prevSlide);
          changeBackground();
        break;
        case 2:
          changeSlidePageStyle(prevSlide);
          (0,_structure_page__WEBPACK_IMPORTED_MODULE_1__.changeStructurePage)(currentSlide);
        break;
      }

      lastSliderImage = document.querySelector('.slider_image:last-child');
      lastSliderImage.remove();

      document.querySelector('.slider_images_container').prepend(sliderImage);

      console.log(`currentSlide ${currentSlide}`);

      sliderTimer = false;
      setTimeout(()=>sliderTimer=true,500);
      };
  });
}

//change background
function changeSlideBackground(direction){
  sliderImage = document.createElement('img');
  sliderImage.classList.add('slider_image');
  sliderImage.setAttribute('src',`./img/background/background-${direction}.jpg`);
  sliderImage.setAttribute('alt',`background-image-${direction}`);
}

function changeBackground (){
  let backgroundContainer = document.querySelector('.body_container');

  backgroundContainer.style.backgroundImage= `url(./img/background/background-${currentSlide}.jpg)`;
  backgroundContainer.style.backgroundAttachment='fixed';
  backgroundContainer.style.backgroundRepeat='no-repeat';
  backgroundContainer.style.backgroundSize='cover'
}

//change pageStyle
function changeSlidePageStyle(direction){
  sliderImage = document.createElement('div');
  sliderImage.classList.add('slider_image');
  sliderImage.innerHTML = _window_contents__WEBPACK_IMPORTED_MODULE_0__.structureWindowPage[direction-1]
}



/***/ }),

/***/ "./js/modules/structure_page.js":
/*!**************************************!*\
  !*** ./js/modules/structure_page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStructurePage": () => (/* binding */ changeStructurePage),
/* harmony export */   "createStructurePage": () => (/* binding */ createStructurePage)
/* harmony export */ });


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

  



  





/***/ }),

/***/ "./js/modules/window_contents.js":
/*!***************************************!*\
  !*** ./js/modules/window_contents.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentWindowStructure": () => (/* binding */ contentWindowStructure),
/* harmony export */   "structureWindowPage": () => (/* binding */ structureWindowPage),
/* harmony export */   "windowMessageContentBackground": () => (/* binding */ windowMessageContentBackground),
/* harmony export */   "windowMessageContentHello": () => (/* binding */ windowMessageContentHello)
/* harmony export */ });
 


//content window hello (1)
const windowMessageContentHello = `
<h2 class="message_font_header">
  Добро пожаловать на наш сайт-конструктор!
</h2>
<p class="message_font_text">
  У нас вы сможете быстро и удобно создать свой собственный сайт.
</p>
<p class="message_font_dialog">
  Для продолжения нажмите на кнопку
</p>
<div class="message_button_container">
  <button class="message_button message_button_font button_befor">Назад</button>
  <button class="message_button message_button_font button_next ">Далее</button>
</div>`;

                              


//content window background (2)
const windowMessageContentBackground = `
<h2 class="message_font_header">
  Фоновое изображение
</h2>
<p class="message_font_text">
  Выберите фоновое изображение.
</p>
<div class="message_slider_container slider_background">
  <div class="slider_arrow arrow-prev">
    <img src="./img/arrow-1.png" alt="arrow">
  </div>
  <div class="slider_window">
    <div class="slider_images_container">
      <img src="./img/background/background-5.jpg" alt="background-image-5" class="slider_image">
      <img src="./img/background/background-1.jpg" alt="background-image-2" class="slider_image">
      <img src="./img/background/background-2.jpg" alt="background-image-2" class="slider_image">
    </div>
  </div>
  <div class="slider_arrow arrow-next">
    <img src="./img/arrow-1.png" alt="arrow">
  </div>
</div>
<p class="message_font_dialog">
  Для продолжения нажмите на кнопку
</p>
<div class="message_button_container">
  <button class="message_button message_button_font button_befor">Назад</button>
  <button class="message_button message_button_font button_next ">Далее</button>
</div>`;


//content window structure (3)

const structureWindowPage_1 =`
<div class="slider_page_container">
  <div class="page_header_container">
    <div class="header_content slider_page_font">header 1</div>
  </div>
  <div class="page_main_container page_main_container_variant-1">
    <div class="page_main_nav-menu slider_page_font">navigation menu</div>
    <div class="page_main_content slider_page_font">main content</div>
  </div>
  <div class="page_footer_container slider_page_font">footer</div>
</div>
`;

const structureWindowPage_2 =`
<div class="slider_page_container">
  <div class="page_header_container">
    <div class="header_content slider_page_font">header 2</div>
  </div>
  <div class="page_main_container page_main_container_variant-2">
    <div class="page_main_nav-menu slider_page_font">navigation menu</div>
    <div class="page_main_content slider_page_font">main content</div>
  </div>
  <div class="page_footer_container slider_page_font">footer</div>
</div>
`;

const structureWindowPage_3 =`
<div class="slider_page_container">
  <div class="page_header_container">
    <div class="header_content slider_page_font">header 3</div>
  </div>
  <div class="page_main_container page_main_container_variant-3">
    <div class="page_main_nav-menu slider_page_font">navigation menu</div>
    <div class="page_main_content slider_page_font">main content</div>
  </div>
  <div class="page_footer_container slider_page_font">footer</div>
</div>
`;

const structureWindowPage = [structureWindowPage_1,structureWindowPage_2,structureWindowPage_3]

const contentWindowStructure = `
  <h2 class="message_font_header">
    Структура страницы
  </h2>
  <p class="message_font_text">
    Выберите структуру страницы.
  </p>
  <div class="message_slider_container slider_page">
    <div class="slider_arrow arrow-prev">
      <img src="./img/arrow-1.png" alt="arrow">
    </div>
    <div class="slider_window">
      <div class="slider_images_container">
        <div class="slider_image">
          ${structureWindowPage_3}
        </div>
        <div class="slider_image">
          ${structureWindowPage_1}
        </div>
        <div class="slider_image">
          ${structureWindowPage_2}
        </div>
        
      </div>
    </div>
    <div class="slider_arrow arrow-next">
      <img src="./img/arrow-1.png" alt="arrow">
    </div>
  </div>
  <p class="message_font_dialog">
    Для продолжения нажмите на кнопку
  </p>
  <div class="message_button_container">
    <button class="message_button message_button_font button_befor">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>`;







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_window_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/window_contents */ "./js/modules/window_contents.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_structure_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/structure_page */ "./js/modules/structure_page.js");


;




document.addEventListener('DOMContentLoaded',() => {

  const mainContainer = document.querySelector('.body_container');
  let currentWindow = 1;

  //create window message
  function createWindowMessage (content){
    const message = document.createElement('div');
    message.classList.add('message_container')
    message.innerHTML = content;

    mainContainer.prepend(message);
    createNewWindowMessage();
  };

  createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentHello);

  // click NEXT button
  function createNewWindowMessage (){
    const buttonNext = document.querySelector('.button_next')
    

    buttonNext.addEventListener('click',()=>{
      console.log('click'); 
      document.querySelector('.message_container').remove();
  
      switch (currentWindow){
        case 1:
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentBackground);
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)(currentWindow,5);
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.changeBackground) ()
          currentWindow=2;
          break;
        case 2:
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowStructure)
          ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)(currentWindow,3);
          (0,_modules_structure_page__WEBPACK_IMPORTED_MODULE_2__.createStructurePage)()
          ;(0,_modules_structure_page__WEBPACK_IMPORTED_MODULE_2__.changeStructurePage)(1)
          // currentWindow=3;
          break;
      }
    });
  }















                                          



});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
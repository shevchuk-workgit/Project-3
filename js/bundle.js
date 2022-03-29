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




//slider
let currentSlide;

function slider(){
  let sliderTimer = true;
  let quantitySlider = 5; //quantity pictures in slider
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

    const image = document.createElement('img');
    image.classList.add('slider_image');
    image.setAttribute('src',`/img/background/background-${nextSlide}.jpg`);
    image.setAttribute('alt',`background-image-${nextSlide}`);

    firstSliderImage = document.querySelector('.slider_image:first-child');  
    firstSliderImage.remove();

    document.querySelector('.slider_images_container').append(image);

    console.log(`currentSlide ${currentSlide}`);

    changeBackground();

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

      const image = document.createElement('img');
      image.classList.add('slider_image');
      image.setAttribute('src',`/img/background/background-${prevSlide}.jpg`);
      image.setAttribute('alt',`background-image-${prevSlide}`);

      lastSliderImage = document.querySelector('.slider_image:last-child');
      lastSliderImage.remove();

      document.querySelector('.slider_images_container').prepend(image);

      console.log(`currentSlide ${currentSlide}`);

      changeBackground();

      sliderTimer = false;
      setTimeout(()=>sliderTimer=true,500);
      };
  });
}

//change background
function changeBackground (){
  let backgroundContainer = document.querySelector('.main_container');


  backgroundContainer.style.backgroundImage= `url(/img/background/background-${currentSlide}.jpg)`;
  backgroundContainer.style.backgroundAttachment='fixed';
  backgroundContainer.style.backgroundRepeat='no-repeat';
  backgroundContainer.style.backgroundSize='cover'
}




/***/ }),

/***/ "./js/modules/window_contents.js":
/*!***************************************!*\
  !*** ./js/modules/window_contents.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentWindowStructure": () => (/* binding */ contentWindowStructure),
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
const contentWindowStructure = `
<h2 class="message_font_header">
  Структура страницы
</h2>
<p class="message_font_text">
  Выберите структуру страницы.
</p>
<div class="message_slider_container">
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


;



document.addEventListener('DOMContentLoaded',() => {

  const mainContainer = document.querySelector('.main_container');
  let currentWindow = 1;

  //create window message
  function createWindowMessage (content){
    const message = document.createElement('div');
    message.classList.add('message_container')
    message.innerHTML = content;

    mainContainer.append(message);
    createNewWindowMessage();
  };

  // createWindowMessage(windowMessageContentHello);

  // click NEXT button
  function createNewWindowMessage (){
    const buttonNext = document.querySelector('.button_next')
    

    buttonNext.addEventListener('click',()=>{
      console.log('click'); 
      document.querySelector('.message_container').remove();
  
      if (currentWindow===1){
        createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentBackground);
        (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)();
        (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.changeBackground)();

        currentWindow=2;
      } else if (currentWindow===2){
        createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowStructure)
      }



    });
  }















                                          



});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
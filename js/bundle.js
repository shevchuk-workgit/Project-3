/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/page_content.js":
/*!************************************!*\
  !*** ./js/modules/page_content.js ***!
  \************************************/
/***/ (() => {

throw new Error("Module parse failed: Export 'backButtonOnHeader' is not defined (195:47)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| }\n| \n> export {changeBackgroundColor,createHeaderText,backButtonOnHeader,navMenuControl};");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        case 2: 
        changeSlideBackground(nextSlide);
        changeBackground();
        break;
        case 3: 
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
        case 2:
          changeSlideBackground(prevSlide);
          changeBackground();
        break;
        case 3:
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStructurePage": () => (/* binding */ changeStructurePage),
/* harmony export */   "createStructurePage": () => (/* binding */ createStructurePage)
/* harmony export */ });


const header = document.querySelector('header');
const main = document.querySelector('.main_container');
const footer = document.querySelector('.footer_container');

function createStructurePage(){

  const header_light = document.createElement('div');
  header_light.classList.add('temporary-light','header_container');
  header.prepend(header_light);

  const footer_light = document.createElement('div');
  footer_light.classList.add('temporary-light');
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
  

  







/***/ }),

/***/ "./js/modules/window_contents.js":
/*!***************************************!*\
  !*** ./js/modules/window_contents.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentWindowHeaderStyle": () => (/* binding */ contentWindowHeaderStyle),
/* harmony export */   "contentWindowNawMenuStyle": () => (/* binding */ contentWindowNawMenuStyle),
/* harmony export */   "contentWindowStructure": () => (/* binding */ contentWindowStructure),
/* harmony export */   "newWindowNavMenuItem": () => (/* binding */ newWindowNavMenuItem),
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
  <button class="message_button message_button_font button_back">Назад</button>
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
  <button class="message_button message_button_font button_back">Назад</button>
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
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>`;

//content window header style (4)

const contentWindowHeaderStyle = `
  <h2 class="message_font_header">
  Настройка заголовка.
  </h2>
  <p class="message_font_text">
  Настройте заголовок страницы.
  </p>
  <div class="message_form_content-page">
  <div class="message_font_subtext">
    Выберите цвет фона:
  </div>
  <div class="message_color-block">
    <div class="message_color-block_aqua" data-color="rgba(000,255,255,0.5)"></div>
    <div class="message_color-block_black" data-color="rgba(000,000,000,0.5)"></div>
    <div class="message_color-block_blue" data-color="rgba(000,000,255,0.5)"></div>
    <div class="message_color-block_fuchsia" data-color="rgba(255,000,255,0.5)"></div>
    <div class="message_color-block_gray" data-color="rgba(128,128,128,0.5)"></div>
    <div class="message_color-block_green" data-color="rgba(000,128,000,0.5)"></div>
    <div class="message_color-block_lime" data-color="rgba(000,255,000,0.5)"></div>
    <div class="message_color-block_maroon" data-color="rgba(128,000,000,0.5)"></div>
    <div class="message_color-block_navy" data-color="rgba(000,000,128,0.5)"></div>
    <div class="message_color-block_olive" data-color="rgba(128,128,000,0.5)"></div>
    <div class="message_color-block_purple" data-color="rgba(128,000,128,0.5)"></div>
    <div class="message_color-block_red" data-color="rgba(255,000,000,0.5)"></div>
    <div class="message_color-block_silver" data-color="rgba(192,192,192,0.5)"></div>
    <div class="message_color-block_teal" data-color="rgba(000,128,128,0.5)"></div>
    <div class="message_color-block_white" data-color="rgba(255,255,255,0.5)"></div>
    <div class="message_color-block_yellow" data-color="rgba(255,255,000,0.5)"></div>
  </div>
  <div class="message_font_subtext">
    Выберите прозрачность фона:
  </div>
  <div class="message_color_opacity">
    <input type="range" min="0" max="100" name="message_color_opacity-range" id="message_color_opacity-range">
    <div class="message_color_opacity_text-block">
      <p class="message_font_subtext">или введите значение:</p>
      <input type="text" name="message_color_opacity-range_text" id="message_color_opacity-range_text" class="message_input_text message_font_subtext">
    </div>
  </div>
  <div class="message_font_subtext">
    Введите текст заголовка:
  </div>
  <input type="text" name="message_change-header-text" id="message_change-header-text" class="message_input_text message_font_subtext">
  </div >
  <p class="message_font_dialog">
  Для продолжения нажмите на кнопку
  </p>
  <div class="message_button_container">
  <button class="message_button message_button_font button_back">Назад</button>
  <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;

const contentWindowNawMenuStyle = `
  <h2 class="message_font_header">
  Настройка меню навигации.
  </h2>
  <p class="message_font_text">
  Настройте меню навигации страницы.
  </p>
  <div class="message_form_content-page">
    <div class="message_font_subtext">
      Выберите цвет фона:
    </div>
    <div class="message_color-block">
      <div class="message_color-block_aqua" data-color="rgba(000,255,255,0.5)"></div>
      <div class="message_color-block_black" data-color="rgba(000,000,000,0.5)"></div>
      <div class="message_color-block_blue" data-color="rgba(000,000,255,0.5)"></div>
      <div class="message_color-block_fuchsia" data-color="rgba(255,000,255,0.5)"></div>
      <div class="message_color-block_gray" data-color="rgba(128,128,128,0.5)"></div>
      <div class="message_color-block_green" data-color="rgba(000,128,000,0.5)"></div>
      <div class="message_color-block_lime" data-color="rgba(000,255,000,0.5)"></div>
      <div class="message_color-block_maroon" data-color="rgba(128,000,000,0.5)"></div>
      <div class="message_color-block_navy" data-color="rgba(000,000,128,0.5)"></div>
      <div class="message_color-block_olive" data-color="rgba(128,128,000,0.5)"></div>
      <div class="message_color-block_purple" data-color="rgba(128,000,128,0.5)"></div>
      <div class="message_color-block_red" data-color="rgba(255,000,000,0.5)"></div>
      <div class="message_color-block_silver" data-color="rgba(192,192,192,0.5)"></div>
      <div class="message_color-block_teal" data-color="rgba(000,128,128,0.5)"></div>
      <div class="message_color-block_white" data-color="rgba(255,255,255,0.5)"></div>
      <div class="message_color-block_yellow" data-color="rgba(255,255,000,0.5)"></div>
    </div>
    <div class="message_font_subtext">
      Выберите прозрачность фона:
    </div>
    <div class="message_color_opacity">
      <input type="range" min="0" max="100" name="message_color_opacity-range" id="message_color_opacity-range">
      <div class="message_color_opacity_text-block">
        <p class="message_font_subtext">или введите значение:</p>
        <input type="text" name="message_color_opacity-range_text" id="message_color_opacity-range_text" class="message_input_text message_font_subtext">
      </div>
    </div>
    <div class="message_font_subtext">
      Введите намнования меню и их адреса:
    </div>

    <button class="message_nav-menu_add-menu message_nav_button message_font_subtext ">Добавить меню</button>

  </div>



    <p class="message_font_dialog">
    Для продолжения нажмите на кнопку
    </p>
    <div class="message_button_container">
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;


function newWindowNavMenuItem (currentMenu){

  const WindowNavMenuItem =`
  <button class="message_nav-menu_remove message_nav_button" id="message_nav-menu_remove-${currentMenu}">&#10006</button>
  <p class="message_font_subtext">Наименование меню ${currentMenu}:</p>
  <input type="text" name="message_nav-menu_text-content_${currentMenu}" id="message_nav-menu_text-content_${currentMenu}" class="message_input_text message_font_subtext" value="Меню ${currentMenu}">
  <p class="message_font_subtext">Адрес ссылки ${currentMenu}:</p>
  <input type="text" name="message_nav-menu_link_${currentMenu}" id="message_nav-menu_link_${currentMenu}" class="message_input_text message_font_subtext" value="https://www.google.ru/">
`
  return WindowNavMenuItem
}




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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_window_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/window_contents */ "./js/modules/window_contents.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_structure_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/structure_page */ "./js/modules/structure_page.js");
/* harmony import */ var _modules_page_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/page_content */ "./js/modules/page_content.js");


;





document.addEventListener('DOMContentLoaded',() => {

  const mainContainer = document.querySelector('.body_container');
  let currentWindow = 1;
  // let currentWindow = 4;

  //create window message
  function createWindowMessage (content){
    const message = document.createElement('div');
    message.classList.add('message_container')
    message.innerHTML = content;

    mainContainer.prepend(message);
    createNewWindowMessage();
    returnPreviousWindowMessage ();

    if(content===_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentHello){
      const buttonBack = document.querySelector('.button_back').style.backgroundColor = '#ccc';
    }
  };

  createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentHello);

  // click NEXT button
  function createNewWindowMessage (){
    const buttonNext = document.querySelector('.button_next')
    

    buttonNext.addEventListener('click',()=>{
      console.log('click NEXT'); 
      document.querySelector('.message_container').remove();
  
      switch (currentWindow){
        case 1:
          currentWindow=2;
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentBackground);
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)(currentWindow,5);
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.changeBackground) ()
          break;

        case 2:
          currentWindow=3;
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowStructure);
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)(currentWindow,3);
          (0,_modules_structure_page__WEBPACK_IMPORTED_MODULE_2__.createStructurePage)();
          (0,_modules_structure_page__WEBPACK_IMPORTED_MODULE_2__.changeStructurePage)(1);
          break;

        case 3:
          currentWindow=4
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowHeaderStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.header_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.createHeaderText)();
          break;

        case 4:
          currentWindow=5
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowNawMenuStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.nav_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.navMenuControl)();
          break;
      }
    });
  }

  //click back button
  function returnPreviousWindowMessage (){

    const buttonBack = document.querySelector('.button_back')

    buttonBack.addEventListener('click', ()=>{
      console.log('click PREV')
      
      switch(currentWindow){
        case 1:
          buttonBack.style.backgroundColor = '#ccc';
          break;
        case 2:
          currentWindow=1
          document.querySelector('.message_container').remove();
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentHello)
          buttonBack.style.backgroundColor = '#ccc';
          
          break;
        case 3:
          currentWindow=2;
          document.querySelector('.message_container').remove();
          document.querySelector('header').innerHTML='';
          document.querySelector('main').innerHTML='';
          document.querySelector('footer').innerHTML='';
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentBackground);
          console.log(currentWindow)
          ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)(currentWindow,5);
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.changeBackground) ()
          
          break;
        

      }
    })

  }











                                          



});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
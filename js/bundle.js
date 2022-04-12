/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/page_content.js":
/*!************************************!*\
  !*** ./js/modules/page_content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleControl": () => (/* binding */ articleControl),
/* harmony export */   "changeBackgroundColor": () => (/* binding */ changeBackgroundColor),
/* harmony export */   "createFooterText": () => (/* binding */ createFooterText),
/* harmony export */   "createHeaderText": () => (/* binding */ createHeaderText),
/* harmony export */   "navMenuControl": () => (/* binding */ navMenuControl)
/* harmony export */ });
/* harmony import */ var _window_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window_contents */ "./js/modules/window_contents.js");


;

let container;

function changeBackgroundColor(currentBlock){
  const colorBlockContainer =document.querySelector('.message_color-block');
  const messageColorOpacityRange = document.querySelector('#message_color_opacity-range');
  const textColorOpacity =document.querySelector('#message_color_opacity-range_text');
  
  let currentOpacity = '0.5';
  let nextOpacity = messageColorOpacityRange.value/100;

  container = document.querySelector(currentBlock);
  textColorOpacity.value=+currentOpacity*100;


  colorBlockContainer.addEventListener('click',(colorBlock)=>{
    if (colorBlock.target.dataset.color){
      container.classList.remove('temporary-light')
      container.style.backgroundColor = colorBlock.target.dataset.color;

      container.style.backgroundColor = container.style.backgroundColor.replace('0.5',nextOpacity);

      textColorOpacity.value=Math.round(currentOpacity*100);
      
      container.style.boxShadow = '5px 5px 5px black';
      }
  })

  messageColorOpacityRange.addEventListener('input',()=>{
    nextOpacity=messageColorOpacityRange.value/100;

    if(nextOpacity==1){
      nextOpacity='0.99'
    }else if(nextOpacity==0){
      nextOpacity='0.01'
    };

    changeOpacity()

    textColorOpacity.value=Math.round(currentOpacity*100);
  })

  textColorOpacity.addEventListener('input',()=>{

    if( isNaN(textColorOpacity.value)){
      textColorOpacity.value = ""
      nextOpacity=1/100;
      messageColorOpacityRange.value = nextOpacity*100
      changeOpacity()
    }else if (textColorOpacity.value<1){
      nextOpacity=1/100;
      messageColorOpacityRange.value = nextOpacity*100
      changeOpacity()
    }else if(textColorOpacity.value>99){
      textColorOpacity.value=99
      nextOpacity=99/100;
      messageColorOpacityRange.value = nextOpacity*100
      changeOpacity()
    } else {
      nextOpacity = textColorOpacity.value/100
      messageColorOpacityRange.value = nextOpacity*100
      changeOpacity()
    }  
  })


  function changeOpacity (){
    container.style.backgroundColor = container.style.backgroundColor.replace(currentOpacity,nextOpacity);
    currentOpacity=nextOpacity;
  }

  // if (currentBlock==='.nav_container'){
  //   changeColorNavMenuItem()
  // }

}

// createHeaderText()
function createHeaderText(){
  const headerContainer = document.querySelector('.header_container');
  const messageHeaderText = document.querySelector('#message_change-header-text');
  const headerText = document.createElement('div');

  headerText.classList.add('header_content','header_font-text');
  headerContainer.append(headerText);
  headerText.textContent = messageHeaderText.value;


  messageHeaderText.addEventListener('input',()=>{

    console.log(messageHeaderText.value);
    headerText.textContent = messageHeaderText.value
  })
}

// add and delete nav menu item
function navMenuControl(){
  const buttonCreateNavMenu = document.querySelector('.message_nav-menu_add-menu');
  const windowContainer = document.querySelector('.message_form_content-page');
  const navMenuContainer = document.querySelector('.nav_container');

  let currentMenu = 1;



  //create button
  buttonCreateNavMenu.addEventListener('click',()=>{
    const navMenuBlock = document.createElement('div')
    navMenuBlock.classList.add('message_text-block')
    navMenuBlock.innerHTML = (0,_window_contents__WEBPACK_IMPORTED_MODULE_0__.newWindowNavMenuItem)(currentMenu);
    windowContainer.append(navMenuBlock);

    createNavMenuItem(currentMenu);
    changeNavMenuValue(currentMenu);
    removeNavMenuBatton (currentMenu);
    
    ++currentMenu;
  })

  //remove nav menu buttton
  function removeNavMenuBatton(currentMenu){
    const buttonRemoveNawMenu = document.querySelector(`#message_nav-menu_remove-${currentMenu}`);

    buttonRemoveNawMenu.addEventListener('click',(element)=>{
      document.querySelector(`.nav-menu_item-${currentMenu}`).remove();

      element.target.parentElement.remove();
    })  
  }

  //create nav menu item in nav-conteiner
  let navMenuBlock;
  function createNavMenuBlock(){
    navMenuBlock = document.createElement('div');
    navMenuBlock.classList.add('nav_container_menu-block');
    navMenuContainer.append(navMenuBlock);
  };

  createNavMenuBlock();

  //create nav menu item in nav-conteiner
  function createNavMenuItem(currentMenu){
    const navMenuItem = document.createElement('a');
    const navMenuLink = document.querySelector(`#message_nav-menu_link_${currentMenu}`).value;
    const navMenuName = document.querySelector(`#message_nav-menu_text-content_${currentMenu}`).value

    navMenuItem.classList.add(`nav-menu_item-${currentMenu}`, 'nav-menu_item', 'font_nav-menu_item')
    navMenuItem.setAttribute('href',`${navMenuLink}`);
    navMenuItem.setAttribute('target','_blank');

    navMenuItem.textContent =navMenuName;
    navMenuBlock.append(navMenuItem);
  }

  function changeNavMenuValue(currentMenu){
    const navMenuItem = document.querySelector(`.nav-menu_item-${currentMenu}`);
    const navMenuName = document.querySelector(`#message_nav-menu_text-content_${currentMenu}`);
    const navMenuLink = document.querySelector(`#message_nav-menu_link_${currentMenu}`);
    


    navMenuName.addEventListener('input',()=>{
      navMenuItem.textContent = navMenuName.value
    })

    navMenuLink.addEventListener('input',()=>{
      navMenuItem.setAttribute('href',`${navMenuLink.value}`)
    })
  }
}

// add and delete article item
function articleControl(){
  const buttonCreateArticle = document.querySelector('.message_article_add');
  const windowContainer = document.querySelector('.message_form_content-page');
  const articleContainer = document.querySelector('.article_container');

  let currentMenu = 1;



  //create button
  buttonCreateArticle.addEventListener('click',()=>{
    const articleBlock = document.createElement('div')
    articleBlock.classList.add('message_text-block')
    articleBlock.innerHTML = (0,_window_contents__WEBPACK_IMPORTED_MODULE_0__.newWindowArticleItem)(currentMenu);
    windowContainer.append(articleBlock);

    createArticleItem(currentMenu);
    changeArticleValue(currentMenu);
    removeArticleBatton (currentMenu);
    
    ++currentMenu;
  })

  //remove article buttton
  function removeArticleBatton(currentMenu){
    const buttonRemoveArticle = document.querySelector(`#message_article_remove-${currentMenu}`);

    buttonRemoveArticle.addEventListener('click',(element)=>{
      document.querySelector(`.article_title_${currentMenu}`).remove();
      document.querySelector(`.article_text-block_${currentMenu}`).remove();

      element.target.parentElement.remove();
    })  
  }

  //create article in article_container
  let articleBlock;
  function createArticleBlock(){
    articleBlock = document.createElement('div');
    articleBlock.classList.add('article_container_content');
    articleContainer.append(articleBlock);
  };

  createArticleBlock();

  //create article item in article_container_content
  function createArticleItem(currentMenu){
    const articleTitle = document.createElement('div');
    const articleTextBlock = document.createElement('div')
    const articleTitleInMessage = document.querySelector(`#message_article_title_${currentMenu}`).value
    const articleTextBlockInMessage = document.querySelector(`#message_article_text-block_${currentMenu}`).value;
    
    articleTitle.classList.add(`article_title_${currentMenu}`, 'article_title', 'font_article_title')
    articleTitle.textContent = articleTitleInMessage;
    articleBlock.append(articleTitle);

    articleTextBlock.classList.add(`article_text-block_${currentMenu}`, 'article_text-block', 'font_article_text-block');
    articleTextBlock.textContent = articleTextBlockInMessage;
    articleBlock.append(articleTextBlock)

  }

  function changeArticleValue(currentMenu){

    const articleTitle = document.querySelector(`.article_title_${currentMenu}`);
    const articleTextBlock = document.querySelector(`.article_text-block_${currentMenu}`);
    const articleTitleInMessage = document.querySelector(`#message_article_title_${currentMenu}`);
    const articleTextBlockInMessage = document.querySelector(`#message_article_text-block_${currentMenu}`);


    articleTitleInMessage.addEventListener('input',()=>{
      articleTitle.textContent = articleTitleInMessage.value;
    })

    articleTextBlockInMessage.addEventListener('input',()=>{
      articleTextBlock.textContent = articleTextBlockInMessage.value;
    })
  }
}

// create footer text()
function createFooterText(){
  const footerContainer = document.querySelector('.footer_container');

  footerContainer.innerHTML = _window_contents__WEBPACK_IMPORTED_MODULE_0__.contentFooter

  const messageFooterMail = document.querySelector('#message_footer_mail');
  const messageFooterPhone = document.querySelector('#message_footer_phone-number');
  const footerPhoneNumberContainer = document.querySelector('.footer_phone-number_container');
  const footerMailContainer = document.querySelector('.footer_mail_container');



  const phoneNumber = document.createElement('div');

  phoneNumber.classList.add('footer_font_text');
  footerPhoneNumberContainer.append(phoneNumber);
  phoneNumber.textContent = messageFooterPhone.value;

  const mail = document.createElement('div');

  mail.classList.add('footer_font_text');
  footerMailContainer.append(mail);
  mail.textContent = messageFooterMail.value;



  messageFooterPhone.addEventListener('input',()=>{
    phoneNumber.textContent = messageFooterPhone.value
  })

  messageFooterMail.addEventListener('input',()=>{
    mail.textContent = messageFooterMail.value
  })
}




/***/ }),

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStructurePage": () => (/* binding */ changeStructurePage),
/* harmony export */   "createStructurePage": () => (/* binding */ createStructurePage)
/* harmony export */ });


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
  

  







/***/ }),

/***/ "./js/modules/window_contents.js":
/*!***************************************!*\
  !*** ./js/modules/window_contents.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentFooter": () => (/* binding */ contentFooter),
/* harmony export */   "contentWindowArticleStyle": () => (/* binding */ contentWindowArticleStyle),
/* harmony export */   "contentWindowHeaderStyle": () => (/* binding */ contentWindowHeaderStyle),
/* harmony export */   "contentWindowNawMenuStyle": () => (/* binding */ contentWindowNawMenuStyle),
/* harmony export */   "contentWindowStructure": () => (/* binding */ contentWindowStructure),
/* harmony export */   "contentWindowfooterStyle": () => (/* binding */ contentWindowfooterStyle),
/* harmony export */   "newWindowArticleItem": () => (/* binding */ newWindowArticleItem),
/* harmony export */   "newWindowNavMenuItem": () => (/* binding */ newWindowNavMenuItem),
/* harmony export */   "structureWindowPage": () => (/* binding */ structureWindowPage),
/* harmony export */   "windowMessageContentBackground": () => (/* binding */ windowMessageContentBackground),
/* harmony export */   "windowMessageContentBye": () => (/* binding */ windowMessageContentBye),
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
  <input type="text" name="message_change-header-text" id="message_change-header-text" class="message_input_text message_font_subtext" value="Заголовок">
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

const contentWindowArticleStyle = `
  <h2 class="message_font_header">
  Настройка основного контента.
  </h2>
  <p class="message_font_text">
  Настройте содержимое страницы.
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
      Введите заголовок и содержимое статьи:
    </div>

    <button class="message_article_add message_article_button message_font_subtext ">Добавить статью</button>

  </div>



    <p class="message_font_dialog">
    Для продолжения нажмите на кнопку
    </p>
    <div class="message_button_container">
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;

function newWindowArticleItem (currentMenu){

  const WindowArticleItem =`
  <button class="message_article_remove message_article_button" id="message_article_remove-${currentMenu}">&#10006</button>

  <p class="message_font_subtext">Заголовок статьи ${currentMenu}:</p>
  
  <input type="text" name="message_article_title_${currentMenu}" id="message_article_title_${currentMenu}" class="message_input_text message_font_subtext" value="Заголовок ${currentMenu}">

  <p class="message_font_subtext">Текст статьи ${currentMenu}:</p>

  <textarea name="message_article_text-block_${currentMenu}" id="message_article_text-block_${currentMenu}" class="message_input_text message_input_textarea message_font_subtext">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sapien elit, sit amet tristique justo auctor sit amet. Maecenas rutrum blandit dolor, sed malesuada risus mattis vitae. Nunc aliquam molestie ullamcorper. Donec venenatis ut sem ac euismod. Sed mollis pharetra sagittis. Morbi aliquam vulputate massa, sed lacinia ante iaculis quis. Duis bibendum id tellus eu blandit. Cras sollicitudin tortor gravida tempus scelerisque. Praesent non enim laoreet, feugiat lacus sed, placerat justo. Nullam sit amet urna diam. Fusce elementum ornare metus sit amet gravida. Fusce commodo cursus orci at rhoncus.

  Nullam sit amet diam eget enim suscipit porta sit amet vel mauris. Suspendisse nunc nulla, condimentum id semper ac, sagittis sed risus. Fusce hendrerit varius augue eget efficitur. Mauris accumsan nisi non velit tristique dignissim. Duis venenatis convallis sodales. Cras at arcu imperdiet erat aliquet venenatis hendrerit ultricies tellus. Integer commodo nulla eu quam egestas, eu tincidunt ipsum porta. Sed rutrum finibus elit, sit amet vulputate nulla. Morbi iaculis risus at enim aliquam, ut semper ex pellentesque. Praesent in velit quis nisl sagittis rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </textarea>
`
  return WindowArticleItem
}

const contentWindowfooterStyle = `
  <h2 class="message_font_header">
  Настройка футера сайта.
  </h2>
  <p class="message_font_text">
  Настройте футер страницы.
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
      Введите свою электронную почту для связи:
    </div>
    <input type="text" name="message_footer_mail" id="message_footer_mail" class="message_input_text message_font_subtext" value="info@gmail.com">

    <div class="message_font_subtext">
      Введите свой номер телефона:
    </div>
    <input type="text" name="message_footer_phone-number" id="message_footer_phone-number" class="message_input_text message_font_subtext" value="+7-495-644-1400">
    

  </div>



    <p class="message_font_dialog">
    Для продолжения нажмите на кнопку
    </p>
    <div class="message_button_container">
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;

  const contentFooter = `
    <div class="footer_phone-number_container">
      <p class="footer_font_text">Наш телефон для связи:</P>
    </div>
    <div class="footer_mail_container">
      <p class="footer_font_text">Наша почта для связи:</P>
    </div>
  `

  const windowMessageContentBye = `
<h2 class="message_font_header">
  Спасибо что воспользовались нашим конструктором!
</h2>
<p class="message_font_text">
  Для того чтобы разместить ваш новый сайт в интернете, пожалуйста позвоните нам.
</p>
<p class="message_font_text">
  8-800-555-35-35.
</p>
<p class="message_font_subtext">
  или мы самостоятельно с вами свяжемся по контактам что вы указывали ранее.
</p>

<p class="message_font_dialog">
  Для продолжения нажмите на кнопку
</p>
<div class="message_button_container">
  <button class="message_button message_button_font button_back">Назад</button>
  <button class="message_button message_button_font button_next ">Готово!</button>
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

        case 5:
          currentWindow=6
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowArticleStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.article_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.articleControl)()
        break;

        case 6:
          currentWindow=7
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowfooterStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.footer_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.createFooterText)()
        break;

        case 7:
          currentWindow=8
          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.windowMessageContentBye);
          

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
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.changeBackground)()
          
        break;

        case 4:
          currentWindow=3;
          document.querySelector('.message_container').remove()
          document.querySelector('header').innerHTML='';
          document.querySelector('main').innerHTML='';
          document.querySelector('footer').innerHTML='';

          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowStructure);
          (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)(currentWindow,3);
          (0,_modules_structure_page__WEBPACK_IMPORTED_MODULE_2__.createStructurePage)();
          (0,_modules_structure_page__WEBPACK_IMPORTED_MODULE_2__.changeStructurePage)(1);
          
        break;
        
        case 5:
          currentWindow=4;
          document.querySelector('.message_container').remove();

          document.querySelector('.nav_container').innerHTML='';
          document.querySelector('.nav_container').classList.add('temporary-light');
          document.querySelector('.nav_container').removeAttribute('style');
          document.querySelector('.header_content').remove();

          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowHeaderStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.header_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.createHeaderText)();
          
        break;

        case 6:
          currentWindow=5;
          document.querySelector('.message_container').remove();

          document.querySelector('.article_container').innerHTML='';
          document.querySelector('.article_container').classList.add('temporary-light');
          document.querySelector('.article_container').removeAttribute('style');
          document.querySelector('.nav_container_menu-block').remove();

          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowNawMenuStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.nav_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.navMenuControl)();
          
        break;

        case 7:
          currentWindow=6;
          document.querySelector('.message_container').remove();

          document.querySelector('.footer_container').innerHTML='';
          document.querySelector('.footer_container').classList.add('temporary-light');
          document.querySelector('.footer_container').removeAttribute('style');
          document.querySelector('.article_container_content').remove();

          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowArticleStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.article_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.articleControl)()
          
        break;

        case 8:
          currentWindow=7;
          document.querySelector('.message_container').remove();

          createWindowMessage(_modules_window_contents__WEBPACK_IMPORTED_MODULE_0__.contentWindowfooterStyle);
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundColor)('.footer_container');
          (0,_modules_page_content__WEBPACK_IMPORTED_MODULE_3__.createFooterText)()
          
        break;

        
      }
    })

  }











                                          



});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
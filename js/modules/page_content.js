'use strict'

import {newWindowNavMenuItem,newWindowArticleItem} from './window_contents';

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
  headerText.textContent = 'Заголовок';


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
    navMenuBlock.innerHTML = newWindowNavMenuItem(currentMenu);
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
//////////////////
//////////////////
//////////////////
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
    articleBlock.innerHTML = newWindowArticleItem(currentMenu);
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
export {changeBackgroundColor,createHeaderText,navMenuControl,articleControl};
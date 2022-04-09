'use strict'

import {newWindowNavMenuItem} from './window_contents';

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
  // const mainContainer = document.querySelector('.main_container');
  const navMenuContainer = document.querySelector('.nav_container');

  let currentMenu = 1;




  // if (mainContainer.classList.contains('main_container_variant-1')){
  //   console.log(1);
  // }else if(mainContainer.classList.contains('main_container_variant-2')){
  //   console.log(2);
  // }else if(mainContainer.classList.contains('main_container_variant-3')){
  //   console.log(3);
  // }


  //create button
  buttonCreateNavMenu.addEventListener('click',()=>{
    const navMenuBlock = document.createElement('div')
    navMenuBlock.classList.add('message_nav-menu_text-block')
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




  //click back button on header page
  function backButtonOnHeader(){
    let sasddf;
    sasddf=1;
    return asd
  }
  backButtonOnHeader()

}

export {changeBackgroundColor,createHeaderText,backButtonOnHeader,navMenuControl};
'use strict'

import {windowMessageContentHello, windowMessageContentBackground,contentWindowStructure,contentWindowHeaderStyle,contentWindowNawMenuStyle} from "./modules/window_contents";
import {slider,changeBackground} from './modules/slider';
import {createStructurePage,changeStructurePage} from './modules/structure_page';
import {changeBackgroundColor,createHeaderText} from './modules/page_content';


document.addEventListener('DOMContentLoaded',() => {

  const mainContainer = document.querySelector('.body_container');
  let currentWindow = 1;
  // let currentWindow = 3;

  //create window message
  function createWindowMessage (content){
    const message = document.createElement('div');
    message.classList.add('message_container')
    message.innerHTML = content;

    mainContainer.prepend(message);
    createNewWindowMessage();
    returnPreviousWindowMessage ();

    if(content===windowMessageContentHello){
      const buttonBack = document.querySelector('.button_back').style.backgroundColor = '#ccc';
    }
  };

  createWindowMessage(windowMessageContentHello);

  // click NEXT button
  function createNewWindowMessage (){
    const buttonNext = document.querySelector('.button_next')
    

    buttonNext.addEventListener('click',()=>{
      console.log('click NEXT'); 
      document.querySelector('.message_container').remove();
  
      switch (currentWindow){
        case 1:
          currentWindow=2;
          createWindowMessage(windowMessageContentBackground);
          slider(currentWindow,5);
          changeBackground ()
          break;

        case 2:
          currentWindow=3;
          createWindowMessage(contentWindowStructure);
          slider(currentWindow,3);
          createStructurePage();
          changeStructurePage(1);
          break;

        case 3:
          currentWindow=4
          createWindowMessage(contentWindowHeaderStyle);
          changeBackgroundColor('.header_container');
          createHeaderText();
          break;

        case 4:
          currentWindow=5
          createWindowMessage(contentWindowNawMenuStyle);
          changeBackgroundColor('.nav_container');
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
          createWindowMessage(windowMessageContentHello)
          buttonBack.style.backgroundColor = '#ccc';
          
          break;
        case 3:
          currentWindow=2;
          document.querySelector('.message_container').remove();
          document.querySelector('header').innerHTML='';
          document.querySelector('main').innerHTML='';
          document.querySelector('footer').innerHTML='';
          createWindowMessage(windowMessageContentBackground);
          console.log(currentWindow)
          slider(currentWindow,5);
          changeBackground ()
          
          break;
        

      }
    })

  }











                                          



});
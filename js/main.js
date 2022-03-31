'use strict'

import {windowMessageContentHello, windowMessageContentBackground,contentWindowStructure} from "./modules/window_contents";
import {slider,changeBackground} from './modules/slider';
import {createStructurePage,changeStructurePage} from './modules/structure_page';


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

  createWindowMessage(windowMessageContentHello);

  // click NEXT button
  function createNewWindowMessage (){
    const buttonNext = document.querySelector('.button_next')
    

    buttonNext.addEventListener('click',()=>{
      console.log('click'); 
      document.querySelector('.message_container').remove();
  
      switch (currentWindow){
        case 1:
          createWindowMessage(windowMessageContentBackground);
          slider(currentWindow,5);
          changeBackground ()
          currentWindow=2;
          break;
        case 2:
          createWindowMessage(contentWindowStructure)
          slider(currentWindow,3);
          createStructurePage()
          changeStructurePage(1)
          // currentWindow=3;
          break;
      }
    });
  }















                                          



});
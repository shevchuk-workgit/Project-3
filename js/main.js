'use strict'

import {windowMessageContentHello, windowMessageContentBackground,contentWindowStructure} from "./modules/window_contents";
import {slider,changeBackground} from './modules/slider';


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
        createWindowMessage(windowMessageContentBackground);
        slider();
        changeBackground();

        currentWindow=2;
      } else if (currentWindow===2){
        createWindowMessage(contentWindowStructure)
      }



    });
  }















                                          



});
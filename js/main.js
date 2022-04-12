'use strict'

import {windowMessageContentHello, windowMessageContentBackground,contentWindowStructure,contentWindowHeaderStyle,contentWindowNawMenuStyle,contentWindowArticleStyle,contentWindowfooterStyle,windowMessageContentBye} from "./modules/window_contents";
import {slider,changeBackground} from './modules/slider';
import {createStructurePage,changeStructurePage} from './modules/structure_page';
import {changeBackgroundColor,createHeaderText,navMenuControl,articleControl,createFooterText} from './modules/page_content';


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
          navMenuControl();
        break;

        case 5:
          currentWindow=6
          createWindowMessage(contentWindowArticleStyle);
          changeBackgroundColor('.article_container');
          articleControl()
        break;

        case 6:
          currentWindow=7
          createWindowMessage(contentWindowfooterStyle);
          changeBackgroundColor('.footer_container');
          createFooterText()
        break;

        case 7:
          currentWindow=8
          createWindowMessage(windowMessageContentBye);
          

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
          changeBackground()
          
        break;

        case 4:
          currentWindow=3;
          document.querySelector('.message_container').remove()
          document.querySelector('header').innerHTML='';
          document.querySelector('main').innerHTML='';
          document.querySelector('footer').innerHTML='';

          createWindowMessage(contentWindowStructure);
          slider(currentWindow,3);
          createStructurePage();
          changeStructurePage(1);
          
        break;
        
        case 5:
          currentWindow=4;
          document.querySelector('.message_container').remove();

          document.querySelector('.nav_container').innerHTML='';
          document.querySelector('.nav_container').classList.add('temporary-light');
          document.querySelector('.nav_container').removeAttribute('style');
          document.querySelector('.header_content').remove();

          createWindowMessage(contentWindowHeaderStyle);
          changeBackgroundColor('.header_container');
          createHeaderText();
          
        break;

        case 6:
          currentWindow=5;
          document.querySelector('.message_container').remove();

          document.querySelector('.article_container').innerHTML='';
          document.querySelector('.article_container').classList.add('temporary-light');
          document.querySelector('.article_container').removeAttribute('style');
          document.querySelector('.nav_container_menu-block').remove();

          createWindowMessage(contentWindowNawMenuStyle);
          changeBackgroundColor('.nav_container');
          navMenuControl();
          
        break;

        case 7:
          currentWindow=6;
          document.querySelector('.message_container').remove();

          document.querySelector('.footer_container').innerHTML='';
          document.querySelector('.footer_container').classList.add('temporary-light');
          document.querySelector('.footer_container').removeAttribute('style');
          document.querySelector('.article_container_content').remove();

          createWindowMessage(contentWindowArticleStyle);
          changeBackgroundColor('.article_container');
          articleControl()
          
        break;

        case 8:
          currentWindow=7;
          document.querySelector('.message_container').remove();

          createWindowMessage(contentWindowfooterStyle);
          changeBackgroundColor('.footer_container');
          createFooterText()
          
        break;

        
      }
    })

  }











                                          



});
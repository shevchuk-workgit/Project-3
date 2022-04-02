
'use strict'

import {structureWindowPage} from './window_contents'
import {changeStructurePage} from './structure_page';

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
        changeStructurePage(currentSlide);
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
          changeStructurePage(currentSlide);
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
  sliderImage.innerHTML = structureWindowPage[direction-1]
}

export {slider,changeBackground};
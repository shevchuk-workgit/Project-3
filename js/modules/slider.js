
'use strict'


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


export {slider,changeBackground};
'use strict'


function changeBackgroundColor(){
  const container = document.querySelector('.header_container');
  const colorBlockContainer =document.querySelector('.message_color-block')
  const messageColorOpacityRange = document.querySelector('#message_color_opacity-range')


  colorBlockContainer.addEventListener('click',(colorBlock)=>{
    if (colorBlock.target.dataset.color){
      // console.log(colorBlock.target.dataset.color);
      container.classList.remove('temporary-light')
      container.style.backgroundColor = colorBlock.target.dataset.color;
      console.log(container.style.backgroundColor);

      container.style.backgroundColor = container.style.backgroundColor.replace(/0.5/gi,`${messageColorOpacityRange.value/100}`);
      console.log(messageColorOpacityRange.value)
      console.log(container.style.backgroundColor);
      // changeBackgroundColor();
      // let a = container.style.backgroundColor;
      // a=a.replace("0.5","1.0");
      // console.log(a);

      }
  })

  messageColorOpacityRange.addEventListener('input',()=>{
    container.style.backgroundColor = container.style.backgroundColor.replace(/0.5/gi,`${messageColorOpacityRange.value/100}`);
    console.log(messageColorOpacityRange.value);
  })

  // container.style.backgroundColor = container.style.backgroundColor.replace(/0.5/gi,'1');

  // console.log(messageColorOpacityRange.value) ;


}

export {changeBackgroundColor};
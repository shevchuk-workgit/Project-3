 
'use strict'

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
  <button class="message_button message_button_font button_befor">Назад</button>
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
  <button class="message_button message_button_font button_befor">Назад</button>
  <button class="message_button message_button_font button_next ">Далее</button>
</div>`;


//content window structure (3)
const contentWindowStructure = `
<h2 class="message_font_header">
  Структура страницы
</h2>
<p class="message_font_text">
  Выберите структуру страницы.
</p>
<div class="message_slider_container">
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
  <button class="message_button message_button_font button_befor">Назад</button>
  <button class="message_button message_button_font button_next ">Далее</button>
</div>`;






export {windowMessageContentHello, windowMessageContentBackground,contentWindowStructure};
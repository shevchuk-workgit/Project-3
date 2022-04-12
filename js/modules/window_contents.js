 
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
  <button class="message_button message_button_font button_back">Назад</button>
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
  <button class="message_button message_button_font button_back">Назад</button>
  <button class="message_button message_button_font button_next ">Далее</button>
</div>`;


//content window structure (3)

const structureWindowPage_1 =`
<div class="slider_page_container">
  <div class="page_header_container">
    <div class="header_content slider_page_font">header 1</div>
  </div>
  <div class="page_main_container page_main_container_variant-1">
    <div class="page_main_nav-menu slider_page_font">navigation menu</div>
    <div class="page_main_content slider_page_font">main content</div>
  </div>
  <div class="page_footer_container slider_page_font">footer</div>
</div>
`;

const structureWindowPage_2 =`
<div class="slider_page_container">
  <div class="page_header_container">
    <div class="header_content slider_page_font">header 2</div>
  </div>
  <div class="page_main_container page_main_container_variant-2">
    <div class="page_main_nav-menu slider_page_font">navigation menu</div>
    <div class="page_main_content slider_page_font">main content</div>
  </div>
  <div class="page_footer_container slider_page_font">footer</div>
</div>
`;

const structureWindowPage_3 =`
<div class="slider_page_container">
  <div class="page_header_container">
    <div class="header_content slider_page_font">header 3</div>
  </div>
  <div class="page_main_container page_main_container_variant-3">
    <div class="page_main_nav-menu slider_page_font">navigation menu</div>
    <div class="page_main_content slider_page_font">main content</div>
  </div>
  <div class="page_footer_container slider_page_font">footer</div>
</div>
`;

const structureWindowPage = [structureWindowPage_1,structureWindowPage_2,structureWindowPage_3]

const contentWindowStructure = `
  <h2 class="message_font_header">
    Структура страницы
  </h2>
  <p class="message_font_text">
    Выберите структуру страницы.
  </p>
  <div class="message_slider_container slider_page">
    <div class="slider_arrow arrow-prev">
      <img src="./img/arrow-1.png" alt="arrow">
    </div>
    <div class="slider_window">
      <div class="slider_images_container">
        <div class="slider_image">
          ${structureWindowPage_3}
        </div>
        <div class="slider_image">
          ${structureWindowPage_1}
        </div>
        <div class="slider_image">
          ${structureWindowPage_2}
        </div>
        
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
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>`;

//content window header style (4)

const contentWindowHeaderStyle = `
  <h2 class="message_font_header">
  Настройка заголовка.
  </h2>
  <p class="message_font_text">
  Настройте заголовок страницы.
  </p>
  <div class="message_form_content-page">
  <div class="message_font_subtext">
    Выберите цвет фона:
  </div>
  <div class="message_color-block">
    <div class="message_color-block_aqua" data-color="rgba(000,255,255,0.5)"></div>
    <div class="message_color-block_black" data-color="rgba(000,000,000,0.5)"></div>
    <div class="message_color-block_blue" data-color="rgba(000,000,255,0.5)"></div>
    <div class="message_color-block_fuchsia" data-color="rgba(255,000,255,0.5)"></div>
    <div class="message_color-block_gray" data-color="rgba(128,128,128,0.5)"></div>
    <div class="message_color-block_green" data-color="rgba(000,128,000,0.5)"></div>
    <div class="message_color-block_lime" data-color="rgba(000,255,000,0.5)"></div>
    <div class="message_color-block_maroon" data-color="rgba(128,000,000,0.5)"></div>
    <div class="message_color-block_navy" data-color="rgba(000,000,128,0.5)"></div>
    <div class="message_color-block_olive" data-color="rgba(128,128,000,0.5)"></div>
    <div class="message_color-block_purple" data-color="rgba(128,000,128,0.5)"></div>
    <div class="message_color-block_red" data-color="rgba(255,000,000,0.5)"></div>
    <div class="message_color-block_silver" data-color="rgba(192,192,192,0.5)"></div>
    <div class="message_color-block_teal" data-color="rgba(000,128,128,0.5)"></div>
    <div class="message_color-block_white" data-color="rgba(255,255,255,0.5)"></div>
    <div class="message_color-block_yellow" data-color="rgba(255,255,000,0.5)"></div>
  </div>
  <div class="message_font_subtext">
    Выберите прозрачность фона:
  </div>
  <div class="message_color_opacity">
    <input type="range" min="0" max="100" name="message_color_opacity-range" id="message_color_opacity-range">
    <div class="message_color_opacity_text-block">
      <p class="message_font_subtext">или введите значение:</p>
      <input type="text" name="message_color_opacity-range_text" id="message_color_opacity-range_text" class="message_input_text message_font_subtext">
    </div>
  </div>
  <div class="message_font_subtext">
    Введите текст заголовка:
  </div>
  <input type="text" name="message_change-header-text" id="message_change-header-text" class="message_input_text message_font_subtext" value="Заголовок">
  </div >
  <p class="message_font_dialog">
  Для продолжения нажмите на кнопку
  </p>
  <div class="message_button_container">
  <button class="message_button message_button_font button_back">Назад</button>
  <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;

const contentWindowNawMenuStyle = `
  <h2 class="message_font_header">
  Настройка меню навигации.
  </h2>
  <p class="message_font_text">
  Настройте меню навигации страницы.
  </p>
  <div class="message_form_content-page">
    <div class="message_font_subtext">
      Выберите цвет фона:
    </div>
    <div class="message_color-block">
      <div class="message_color-block_aqua" data-color="rgba(000,255,255,0.5)"></div>
      <div class="message_color-block_black" data-color="rgba(000,000,000,0.5)"></div>
      <div class="message_color-block_blue" data-color="rgba(000,000,255,0.5)"></div>
      <div class="message_color-block_fuchsia" data-color="rgba(255,000,255,0.5)"></div>
      <div class="message_color-block_gray" data-color="rgba(128,128,128,0.5)"></div>
      <div class="message_color-block_green" data-color="rgba(000,128,000,0.5)"></div>
      <div class="message_color-block_lime" data-color="rgba(000,255,000,0.5)"></div>
      <div class="message_color-block_maroon" data-color="rgba(128,000,000,0.5)"></div>
      <div class="message_color-block_navy" data-color="rgba(000,000,128,0.5)"></div>
      <div class="message_color-block_olive" data-color="rgba(128,128,000,0.5)"></div>
      <div class="message_color-block_purple" data-color="rgba(128,000,128,0.5)"></div>
      <div class="message_color-block_red" data-color="rgba(255,000,000,0.5)"></div>
      <div class="message_color-block_silver" data-color="rgba(192,192,192,0.5)"></div>
      <div class="message_color-block_teal" data-color="rgba(000,128,128,0.5)"></div>
      <div class="message_color-block_white" data-color="rgba(255,255,255,0.5)"></div>
      <div class="message_color-block_yellow" data-color="rgba(255,255,000,0.5)"></div>
    </div>
    <div class="message_font_subtext">
      Выберите прозрачность фона:
    </div>
    <div class="message_color_opacity">
      <input type="range" min="0" max="100" name="message_color_opacity-range" id="message_color_opacity-range">
      <div class="message_color_opacity_text-block">
        <p class="message_font_subtext">или введите значение:</p>
        <input type="text" name="message_color_opacity-range_text" id="message_color_opacity-range_text" class="message_input_text message_font_subtext">
      </div>
    </div>
    <div class="message_font_subtext">
      Введите намнования меню и их адреса:
    </div>

    <button class="message_nav-menu_add-menu message_nav_button message_font_subtext ">Добавить меню</button>

  </div>



    <p class="message_font_dialog">
    Для продолжения нажмите на кнопку
    </p>
    <div class="message_button_container">
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;


function newWindowNavMenuItem (currentMenu){

  const WindowNavMenuItem =`
  <button class="message_nav-menu_remove message_nav_button" id="message_nav-menu_remove-${currentMenu}">&#10006</button>
  <p class="message_font_subtext">Наименование меню ${currentMenu}:</p>
  <input type="text" name="message_nav-menu_text-content_${currentMenu}" id="message_nav-menu_text-content_${currentMenu}" class="message_input_text message_font_subtext" value="Меню ${currentMenu}">
  <p class="message_font_subtext">Адрес ссылки ${currentMenu}:</p>
  <input type="text" name="message_nav-menu_link_${currentMenu}" id="message_nav-menu_link_${currentMenu}" class="message_input_text message_font_subtext" value="https://www.google.ru/">
`
  return WindowNavMenuItem
}

const contentWindowArticleStyle = `
  <h2 class="message_font_header">
  Настройка основного контента.
  </h2>
  <p class="message_font_text">
  Настройте содержимое страницы.
  </p>
  <div class="message_form_content-page">
    <div class="message_font_subtext">
      Выберите цвет фона:
    </div>
    <div class="message_color-block">
      <div class="message_color-block_aqua" data-color="rgba(000,255,255,0.5)"></div>
      <div class="message_color-block_black" data-color="rgba(000,000,000,0.5)"></div>
      <div class="message_color-block_blue" data-color="rgba(000,000,255,0.5)"></div>
      <div class="message_color-block_fuchsia" data-color="rgba(255,000,255,0.5)"></div>
      <div class="message_color-block_gray" data-color="rgba(128,128,128,0.5)"></div>
      <div class="message_color-block_green" data-color="rgba(000,128,000,0.5)"></div>
      <div class="message_color-block_lime" data-color="rgba(000,255,000,0.5)"></div>
      <div class="message_color-block_maroon" data-color="rgba(128,000,000,0.5)"></div>
      <div class="message_color-block_navy" data-color="rgba(000,000,128,0.5)"></div>
      <div class="message_color-block_olive" data-color="rgba(128,128,000,0.5)"></div>
      <div class="message_color-block_purple" data-color="rgba(128,000,128,0.5)"></div>
      <div class="message_color-block_red" data-color="rgba(255,000,000,0.5)"></div>
      <div class="message_color-block_silver" data-color="rgba(192,192,192,0.5)"></div>
      <div class="message_color-block_teal" data-color="rgba(000,128,128,0.5)"></div>
      <div class="message_color-block_white" data-color="rgba(255,255,255,0.5)"></div>
      <div class="message_color-block_yellow" data-color="rgba(255,255,000,0.5)"></div>
    </div>
    <div class="message_font_subtext">
      Выберите прозрачность фона:
    </div>
    <div class="message_color_opacity">
      <input type="range" min="0" max="100" name="message_color_opacity-range" id="message_color_opacity-range">
      <div class="message_color_opacity_text-block">
        <p class="message_font_subtext">или введите значение:</p>
        <input type="text" name="message_color_opacity-range_text" id="message_color_opacity-range_text" class="message_input_text message_font_subtext">
      </div>
    </div>
    <div class="message_font_subtext">
      Введите заголовок и содержимое статьи:
    </div>

    <button class="message_article_add message_article_button message_font_subtext ">Добавить статью</button>

  </div>



    <p class="message_font_dialog">
    Для продолжения нажмите на кнопку
    </p>
    <div class="message_button_container">
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;

function newWindowArticleItem (currentMenu){

  const WindowArticleItem =`
  <button class="message_article_remove message_article_button" id="message_article_remove-${currentMenu}">&#10006</button>

  <p class="message_font_subtext">Заголовок статьи ${currentMenu}:</p>
  
  <input type="text" name="message_article_title_${currentMenu}" id="message_article_title_${currentMenu}" class="message_input_text message_font_subtext" value="Заголовок ${currentMenu}">

  <p class="message_font_subtext">Текст статьи ${currentMenu}:</p>

  <textarea name="message_article_text-block_${currentMenu}" id="message_article_text-block_${currentMenu}" class="message_input_text message_input_textarea message_font_subtext">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sapien elit, sit amet tristique justo auctor sit amet. Maecenas rutrum blandit dolor, sed malesuada risus mattis vitae. Nunc aliquam molestie ullamcorper. Donec venenatis ut sem ac euismod. Sed mollis pharetra sagittis. Morbi aliquam vulputate massa, sed lacinia ante iaculis quis. Duis bibendum id tellus eu blandit. Cras sollicitudin tortor gravida tempus scelerisque. Praesent non enim laoreet, feugiat lacus sed, placerat justo. Nullam sit amet urna diam. Fusce elementum ornare metus sit amet gravida. Fusce commodo cursus orci at rhoncus.

  Nullam sit amet diam eget enim suscipit porta sit amet vel mauris. Suspendisse nunc nulla, condimentum id semper ac, sagittis sed risus. Fusce hendrerit varius augue eget efficitur. Mauris accumsan nisi non velit tristique dignissim. Duis venenatis convallis sodales. Cras at arcu imperdiet erat aliquet venenatis hendrerit ultricies tellus. Integer commodo nulla eu quam egestas, eu tincidunt ipsum porta. Sed rutrum finibus elit, sit amet vulputate nulla. Morbi iaculis risus at enim aliquam, ut semper ex pellentesque. Praesent in velit quis nisl sagittis rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </textarea>
`
  return WindowArticleItem
}

const contentWindowfooterStyle = `
  <h2 class="message_font_header">
  Настройка футера сайта.
  </h2>
  <p class="message_font_text">
  Настройте футер страницы.
  </p>
  <div class="message_form_content-page">
    <div class="message_font_subtext">
      Выберите цвет фона:
    </div>
    <div class="message_color-block">
      <div class="message_color-block_aqua" data-color="rgba(000,255,255,0.5)"></div>
      <div class="message_color-block_black" data-color="rgba(000,000,000,0.5)"></div>
      <div class="message_color-block_blue" data-color="rgba(000,000,255,0.5)"></div>
      <div class="message_color-block_fuchsia" data-color="rgba(255,000,255,0.5)"></div>
      <div class="message_color-block_gray" data-color="rgba(128,128,128,0.5)"></div>
      <div class="message_color-block_green" data-color="rgba(000,128,000,0.5)"></div>
      <div class="message_color-block_lime" data-color="rgba(000,255,000,0.5)"></div>
      <div class="message_color-block_maroon" data-color="rgba(128,000,000,0.5)"></div>
      <div class="message_color-block_navy" data-color="rgba(000,000,128,0.5)"></div>
      <div class="message_color-block_olive" data-color="rgba(128,128,000,0.5)"></div>
      <div class="message_color-block_purple" data-color="rgba(128,000,128,0.5)"></div>
      <div class="message_color-block_red" data-color="rgba(255,000,000,0.5)"></div>
      <div class="message_color-block_silver" data-color="rgba(192,192,192,0.5)"></div>
      <div class="message_color-block_teal" data-color="rgba(000,128,128,0.5)"></div>
      <div class="message_color-block_white" data-color="rgba(255,255,255,0.5)"></div>
      <div class="message_color-block_yellow" data-color="rgba(255,255,000,0.5)"></div>
    </div>
    <div class="message_font_subtext">
      Выберите прозрачность фона:
    </div>
    <div class="message_color_opacity">
      <input type="range" min="0" max="100" name="message_color_opacity-range" id="message_color_opacity-range">
      <div class="message_color_opacity_text-block">
        <p class="message_font_subtext">или введите значение:</p>
        <input type="text" name="message_color_opacity-range_text" id="message_color_opacity-range_text" class="message_input_text message_font_subtext">
      </div>
    </div>

    <div class="message_font_subtext">
      Введите свою электронную почту для связи:
    </div>
    <input type="text" name="message_footer_mail" id="message_footer_mail" class="message_input_text message_font_subtext" value="info@gmail.com">

    <div class="message_font_subtext">
      Введите свой номер телефона:
    </div>
    <input type="text" name="message_footer_phone-number" id="message_footer_phone-number" class="message_input_text message_font_subtext" value="+7-495-644-1400">
    

  </div>



    <p class="message_font_dialog">
    Для продолжения нажмите на кнопку
    </p>
    <div class="message_button_container">
    <button class="message_button message_button_font button_back">Назад</button>
    <button class="message_button message_button_font button_next ">Далее</button>
  </div>
`;

  const contentFooter = `
    <div class="footer_phone-number_container">
      <p class="footer_font_text">Наш телефон для связи:</P>
    </div>
    <div class="footer_mail_container">
      <p class="footer_font_text">Наша почта для связи:</P>
    </div>
  `

  const windowMessageContentBye = `
<h2 class="message_font_header">
  Спасибо что воспользовались нашим конструктором!
</h2>
<p class="message_font_text">
  Для того чтобы разместить ваш новый сайт в интернете, пожалуйста позвоните нам.
</p>
<p class="message_font_text">
  8-800-555-35-35.
</p>
<p class="message_font_subtext">
  или мы самостоятельно с вами свяжемся по контактам что вы указывали ранее.
</p>

<p class="message_font_dialog">
  Для продолжения нажмите на кнопку
</p>
<div class="message_button_container">
  <button class="message_button message_button_font button_back">Назад</button>
  <button class="message_button message_button_font button_next ">Готово!</button>
</div>`;


export {windowMessageContentHello, windowMessageContentBackground,contentWindowStructure,structureWindowPage,contentWindowHeaderStyle,contentWindowNawMenuStyle,newWindowNavMenuItem,contentWindowArticleStyle,newWindowArticleItem,contentWindowfooterStyle,contentFooter,windowMessageContentBye};
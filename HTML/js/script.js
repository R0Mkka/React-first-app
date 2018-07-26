window.addEventListener('DOMContentLoaded', function() {

  // For regulating backgrond's height

  let rows = document.getElementsByClassName('row'),
      content = document.querySelector('.content'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header');

  let backs = document.getElementsByClassName('row__block-background'),
      imgs = content.getElementsByTagName('img');

  for(let i = 0; i < imgs.length; i++){
      backs[i].style.height = imgs[i].offsetHeight + 'px';
  }
  menu.style.width = header.clientWidth + 'px';

  window.onresize = function(event) {
    for(let i = 0; i < imgs.length; i++){
        backs[i].style.height = imgs[i].offsetHeight + 'px';
    }
    menu.style.width = header.clientWidth + 'px';
  };

  // Menu button images

  let menu_img = document.getElementsByTagName('img')[0];

    menu_img.addEventListener('mouseover', function() {
      if(menu_img.getAttribute('src') !== 'img/cross.png') {
        menu_img.setAttribute('src', 'img/menu_focus.png');
      }
    });

    menu_img.addEventListener('mouseout', function() {
      if(menu_img.getAttribute('src') !== 'img/cross.png') {
        menu_img.setAttribute('src', 'img/menu_nofocus.png');
      }
    });

  menu_img.addEventListener('click', function() {
    if(menu_img.getAttribute('src') === 'img/menu_focus.png') {
      menu_img.setAttribute('src', 'img/cross.png');
    } else {
      menu_img.setAttribute('src', 'img/menu_focus.png');
    }

    $('.left-menu').toggleClass('open');
    $('.content').toggleClass('slick');
    $('.footer').toggleClass('slick');
  });

  // Menu background apperance and disappearance

  let preview = document.querySelector('.preview'),
      preview_height,
      height = 112;

  if(preview !== null){
    preview_height = preview.clientHeight;
  } else {
    preview_height = 112;
  }

  if(window.pageYOffset >= (preview_height - 112)){
    menu.classList.add('menu_scroll');
  } else {
    menu.classList.remove('menu_scroll');
  }

  window.onscroll = function() {
    if(window.pageYOffset >= (preview_height - 112)){
      menu.classList.add('menu_scroll');
    } else {
      menu.classList.remove('menu_scroll');
    }
  }



});

window.addEventListener('DOMContentLoaded', function() {

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
  });

  // Menu background apperance and disappearance

  let preview = document.querySelector('.preview'),
      menu = document.querySelector('.menu'),
      preview_height,
      height = 112;

  if(preview !== null){
    preview_height = preview.clientHeight;
  } else {
    preview_height = 112;
  }

  if(window.pageYOffset >= (preview_height - 112)){
    menu.classList.add('scroll');
  } else {
    menu.classList.remove('scroll');
  }

  window.onscroll = function() {
    if(window.pageYOffset >= (preview_height - 112)){
      menu.classList.add('scroll');
    } else {
      menu.classList.remove('scroll');
    }
  }

});

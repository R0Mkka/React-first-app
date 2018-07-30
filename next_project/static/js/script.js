window.addEventListener('DOMContentLoaded', function() {
  start();

  function start() {
    let content = document.querySelector('.content'),
        menu = document.querySelector('.menu'),
        header = document.querySelector('.header'),
        backs = document.getElementsByClassName('row__block-background'),
        imgs = content.getElementsByTagName('img'),
        preview = document.querySelector('.preview');

    for(let i = 0; i < imgs.length; i++){
        backs[i].style.height = imgs[i].offsetHeight + 'px';
    }
    menu.style.width = header.clientWidth + 'px';

    if(preview !== null){
        preview_height = preview.offsetHeight;
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

    window.onresize = function(event) {
      for(let i = 0; i < imgs.length; i++){
          backs[i].style.height = imgs[i].offsetHeight + 'px';
      }
      menu.style.width = header.clientWidth + 'px';
    };

    document.onreload = function(event) {
      console.log('hi');
    }
  }

});

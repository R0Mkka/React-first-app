window.addEventListener('DOMContentLoaded', function() {

  let menu_img = document.getElementsByTagName('img')[0];

  menu_img.addEventListener('mouseover', function() {
    menu_img.setAttribute('src', 'img/menu_focus.png');
  });

  menu_img.addEventListener('mouseout', function() {
    menu_img.setAttribute('src', 'img/menu_nofocus.png');
  });

});

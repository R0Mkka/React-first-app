import React from 'react'
import menu_nofocus from './img/menu_nofocus.png'
import menu_focus from './img/menu_focus.png'
import facebook from './img/facebook.png'
import telegram from './img/telegram.png'
import './css/menu.css'

const Menu = () => (
  <div className="menu">
    <div className="menu__button" title="Меню">
      <img onMouseOver={onmouseover} className="menu__button-img" src={menu_nofocus} alt="Menu" />
    </div>
    <div className="menu__logo">
      DIGITAL HEROES CLUB <sup className="menu__beta-word">βeta</sup>
    </div>
    <div className="menu__contacts">
      <span className="menu__phone" title="Позвоните нам">
        +7 (926) 934-33-73
      </span>
      <a href="#">
        <img className="menu__social" src={facebook} alt="Facebook" title="Facebook" />
      </a>
      <a href="#">
        <img className="menu__social" src={telegram} alt="Telegram" title="Telegram" />
      </a>
    </div>
  </div>
);

let onmouseover = function() {
  let menuBtnImg = document.querySelector('.menu__button-img');

  menuBtnImg.addEventListener('mouseover', function() {
    menuBtnImg.setAttribute('src', menu_focus);
  });

  menuBtnImg.addEventListener('mouseout', function() {
    menuBtnImg.setAttribute('src', menu_nofocus);
  });
}

export default Menu;

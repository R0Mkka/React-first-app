import React, { Component } from 'react';
import Preview from '../Preview';
import Link from 'next/link';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      menuBtn: "../../static/img/menu_nofocus.png"
    }
  }

  handleOnmouseover = () => {
    if(this.state.menuBtn !== "../../static/img/cross.png"){
      this.setState({
        menuBtn: "../../static/img/menu_focus.png"
      });
    }
  }

  handleOnmouseout = () => {
    if(this.state.menuBtn !== "../../static/img/cross.png"){
      this.setState({
        menuBtn: "../../static/img/menu_nofocus.png"
      });
    }
  }

  ToggleClass = (elem, classStr) => {
    if(elem.classList.contains(classStr)) {
      elem.classList.remove(classStr);
    } else {
      elem.classList.add(classStr);
    }
  }

  handleOnclick = () => {
    let prevState = this.state.menuBtn,
        afterState = '';

    let leftMenu = document.querySelector('.left-menu'),
        content = document.querySelector('.content');

    if(prevState === "../../static/img/menu_focus.png") {
      afterState = "../../static/img/cross.png";
    } else {
      afterState = "../../static/img/menu_focus.png";
    }

    this.ToggleClass(leftMenu, 'open');
    this.ToggleClass(content, 'slick');

    this.setState({
      menuBtn: afterState
    });
  }

  render() {
    return (
      <div className="header-wrapper">
  			<div className="header">
  				<div className="menu">
  					<div className="menu__button" title="Меню">
  						<img onClick={this.handleOnclick}
                   src={this.state.menuBtn}
                   onMouseOver={this.handleOnmouseover}
                   onMouseOut={this.handleOnmouseout}
                   alt="Menu" />
  					</div>
  					<div className="menu__logo">
  						DIGITAL HEROES CLUB <sup className="menu__beta-word">βeta</sup>
  					</div>
  					<div className="menu__contacts">
  						<span className="menu__phone" title="Позвоните нам">
  							+7 (926) 934-33-73
  						</span>
              <Link href="/">
    						<a>	<img className="menu__social" src="../../static/img/facebook.png" alt="Facebook" title="Facebook" />	</a>
              </Link>
              <Link href="/">
    						<a>	<img className="menu__social" src="../../static/img/telegram.png" alt="Telegram" title="Telegram" />	</a>
              </Link>
  					</div>
  				</div>
          <Preview />
  			</div>
  		</div>
    );
  }
}

export default Header;

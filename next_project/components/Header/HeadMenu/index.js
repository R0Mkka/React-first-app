import React, { Component } from 'react';
import Link from 'next/link';
import './HeadMenu.scss';

class HeadMenu extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      menuBtn: "../../static/img/menu_nofocus.png",
      menuClassList: "menu"
    }
  }

  componentDidMount = () => {
    let menu = document.querySelector('.menu'),
        preview = document.querySelector('.preview'),
        preview_height;

    preview_height = (preview !== null) ? preview.offsetHeight : 112;

    let menuShow = () => {
      let menuClassList =
      (window.pageYOffset >= (preview_height - 112)) ? "menu menu_scroll" : "menu";

      this.setState({ menuClassList: menuClassList });
    }

    menuShow();
    window.onscroll = function() { menuShow(); };
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
        content = document.querySelector('.content'),
        footer = document.querySelector('.footer');

    if(prevState === "../../static/img/menu_focus.png") {
      afterState = "../../static/img/cross.png";
    } else {
      afterState = "../../static/img/menu_focus.png";
    }

    this.ToggleClass(leftMenu, 'open');
    this.ToggleClass(content, 'slick');
    this.ToggleClass(footer, 'slick');

    this.setState({ menuBtn: afterState });
  }

  render() {

    const menu__logo = (this.props.home_link !== true) ? (
      <div className="menu__logo">
        DIGITAL HEROES CLUB <sup className="menu__beta-word">βeta</sup>
      </div>
    ) : (
      <div className="menu__logo">
        <a className="menu__home-link" href="/"> DIGITAL HEROES CLUB <sup className="menu__beta-word">βeta</sup> </a>
      </div>
    );

    return (
			<div className={this.state.menuClassList}>
				<div className="menu__button" title="Меню">
					<img onClick={this.handleOnclick}
               src={this.state.menuBtn}
               onMouseOver={this.handleOnmouseover}
               onMouseOut={this.handleOnmouseout}
               alt="Menu" />
				</div>
				{ menu__logo }
				<div className="menu__contacts">
					<span className="menu__phone" title="Позвоните нам">
						+7 (926) 934-33-73
					</span>
          <Link href="/">
						<a>	<img className="menu__social" src="../../../static/img/facebook.png" alt="Facebook" title="Facebook" />	</a>
          </Link>
          <Link href="/">
						<a>	<img className="menu__social" src="../../../static/img/telegram.png" alt="Telegram" title="Telegram" />	</a>
          </Link>
				</div>
			</div>
    );
  }
}

export default HeadMenu;

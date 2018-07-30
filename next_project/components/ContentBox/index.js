import React, { Component } from 'react';
import Link from 'next/link';
import Footer from '../Footer';
import './ContentBox.scss';

function LeftMenu(props) {
  const classes = (props.leftMenu === "padding-top") ?
  "left-menu left-menu_padding-top" : "left-menu";

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

class ContentBox extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="content-box">
        <div className="bordered-visible-box">
          <LeftMenu leftMenu={this.props.leftMenu}>
          <ul>
            <li>
              <Link href="/about">
                <a title="О нас">О нас</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a title="Работы">Работы</a>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <a title="Контакты">Контакты</a>
              </Link>
            </li>
          </ul>
          </LeftMenu>
          {this.props.children}
          <hr className="line" />
          <Footer footer_padding={this.props.footer_padding}/>
        </div>
      </div>
    );
  }
}

export default ContentBox;

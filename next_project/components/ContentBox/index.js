import React, { Component } from 'react';
import Link from 'next/link';
import Content from '../Content';
import Footer from '../Footer';
import './ContentBox.scss';

class ContentBox extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="content-box">
        <div className="bordered-visible-box">
          <div className="left-menu left-menu_padding-top">
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
          </div>
          <Content />
          <hr className="line" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default ContentBox;

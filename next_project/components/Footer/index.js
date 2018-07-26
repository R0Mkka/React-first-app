import React, { Component } from 'react';
import Link from 'next/link';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="footer">
    		<div className="footer__copyright">
    			digitalheroes.club &#8212; разработка и развитие сайтов &#169; 2014 - 2018
    		</div>
    		<div className="footer__links">
    			<Link href="/about">
            <a title="О нас">О нас</a>
          </Link>
    			<Link href="/works">
            <a title="Работы">Работы</a>
          </Link>
    			<Link href="/contacts">
            <a title="Контакты">Контакты</a>
          </Link>
    		</div>
    	</div>
    );
  }
}

export default Footer;

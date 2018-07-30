import React, { Component } from 'react';
import Link from 'next/link';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      footerClassList: "footer"
    }
  }

  componentDidMount = () => {
    let footerClassList = (this.props.footer_padding == true) ?
    "footer footer_padding-left-right-50" : "footer";

    this.setState({
      footerClassList: footerClassList
    });
  }

  render() {
    return (
      <div className={this.state.footerClassList}>
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

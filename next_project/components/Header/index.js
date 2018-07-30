import React, { Component } from 'react';
import Link from 'next/link';
import Preview from './Preview';
import HeadMenu from './HeadMenu';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="header-wrapper">
  			<div className="header">
          <HeadMenu />
          <Preview />
  			</div>
  		</div>
    );
  }
}

export default Header;

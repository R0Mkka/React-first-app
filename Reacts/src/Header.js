import React from 'react'
import Menu from './Menu'
import Preview from './Preview'
import './css/header.css'

const Header = () => (
  <div className="header">
    <Menu />
		<Preview />
	</div>
);

export default Header;
